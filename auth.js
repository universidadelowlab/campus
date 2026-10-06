(() => {
  const gate = document.querySelector("#authGate");
  const shell = document.querySelector("#appShell");
  const form = document.querySelector("#loginForm");
  const emailInput = document.querySelector("#loginEmail");
  const passwordInput = document.querySelector("#loginPassword");
  const submitButton = document.querySelector("#loginSubmit");
  const message = document.querySelector("#authMessage");
  const forgotButton = document.querySelector("#forgotPassword");
  const resetForm = document.querySelector("#resetForm");
  const resetSubmit = document.querySelector("#resetSubmit");
  const newPasswordInput = document.querySelector("#newPassword");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const backToLoginButton = document.querySelector("#backToLogin");
  const toggleButton = document.querySelector("#togglePassword");
  const authTitle = document.querySelector("#authTitle");
  const config = window.LOWLAB_SUPABASE || {};
  const initialQuery = new URLSearchParams(location.search);
  const initialFragment = new URLSearchParams(location.hash.replace(/^#/, ""));
  const isInviteFlow = initialQuery.get("type") === "invite" || initialFragment.get("type") === "invite";
  const authLinkError = initialQuery.get("error_code") || initialFragment.get("error_code");
  const userKeys = [
    "lowlab-completed",
    "lowlab-favorites",
    "lowlab-plan",
    "lowlab-student-name",
    "lowlab-completion-date",
    "lowlab-certificate-code",
    "lowlab-profile",
  ];
  let applicationLoaded = false;
  let syncTimer = 0;

  function setMessage(text, type = "") {
    message.textContent = text;
    message.dataset.type = type;
  }

  function setBusy(busy) {
    submitButton.disabled = busy;
    emailInput.disabled = busy;
    passwordInput.disabled = busy;
    submitButton.textContent = busy ? "Entrando…" : "Entrar no campus";
  }

  function clearUserStorage() {
    window.clearTimeout(syncTimer);
    userKeys.forEach((key) => localStorage.removeItem(key));
    window.lessonContent = null;
  }

  function clearUserSession() {
    clearUserStorage();
    if (window.LowLabAuth) {
      window.LowLabAuth.user = null;
      window.LowLabAuth.profile = null;
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
      document.body.append(script);
    });
  }

  async function loadApplication() {
    if (applicationLoaded) return;
    try {
      if (window.LowLabAuth?.user) {
        const { data, error } = await window.LowLabAuth.client.from("course_lessons").select("id,title,content");
        if (error || !data || data.length !== 63) throw new Error("Não foi possível carregar as aulas. Tente novamente.");
        window.lessonContent = Object.fromEntries(data.map((lesson) => [lesson.title, lesson.content]));
      } else if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
        await loadScript("lesson-content.js");
      }
      await loadScript("app.js");
      applicationLoaded = true;
    } catch (error) {
      window.lessonContent = null;
      throw error;
    }
  }

  async function hydrateLocalState(profile, progress) {
    clearUserStorage();
    localStorage.setItem("lowlab-completed", JSON.stringify(progress?.completed_lessons || []));
    localStorage.setItem("lowlab-favorites", JSON.stringify(progress?.favorite_lessons || []));
    localStorage.setItem("lowlab-plan", JSON.stringify(progress?.plan_items || []));
    if (progress?.completion_date) localStorage.setItem("lowlab-completion-date", progress.completion_date);
    if (progress?.certificate_code) localStorage.setItem("lowlab-certificate-code", progress.certificate_code);
    const profileData = {
      fullName: profile.full_name || "",
      email: profile.email || "",
      phone: profile.phone || "",
      birthDate: profile.birth_date || "",
      address: profile.address || {},
    };
    localStorage.setItem("lowlab-profile", JSON.stringify(profileData));
    if (profile.certificate_name || profile.full_name) {
      localStorage.setItem("lowlab-student-name", profile.certificate_name || profile.full_name);
    }
  }

  async function syncFromLocalStorage() {
    if (!window.LowLabAuth?.user) return;
    window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(async () => {
      const profile = JSON.parse(localStorage.getItem("lowlab-profile") || "{}");
      const address = profile.address || {};
      await Promise.all([
        window.LowLabAuth.client.from("profiles").update({
          full_name: profile.fullName || null,
          phone: profile.phone || null,
          birth_date: profile.birthDate || null,
          address,
          certificate_name: localStorage.getItem("lowlab-student-name") || null,
          updated_at: new Date().toISOString(),
        }).eq("id", window.LowLabAuth.user.id),
        window.LowLabAuth.client.from("student_progress").update({
          favorite_lessons: JSON.parse(localStorage.getItem("lowlab-favorites") || "[]"),
          plan_items: JSON.parse(localStorage.getItem("lowlab-plan") || "[]"),
          updated_at: new Date().toISOString(),
        }).eq("user_id", window.LowLabAuth.user.id),
      ]);
    }, 450);
  }

  async function openCampus(session) {
    const client = window.LowLabAuth.client;
    const { data: profile, error: profileError } = await client.from("profiles").select("id,email,full_name,phone,birth_date,address,certificate_name,role,status").eq("id", session.user.id).single();
    if (profileError || !profile) throw new Error("Não foi possível carregar seu perfil.");
    if (profile.status === "pending") throw new Error("Seu cadastro está aguardando liberação.");
    if (profile.status !== "active") throw new Error("Este acesso está suspenso. Fale com o suporte LowLab.");
    const { data: progress, error: progressError } = await client.from("student_progress").select("completed_lessons,favorite_lessons,plan_items,completion_date,certificate_code").eq("user_id", session.user.id).single();
    if (progressError || !progress) throw new Error("Não foi possível carregar seu progresso.");
    window.LowLabAuth.user = session.user;
    window.LowLabAuth.profile = profile;
    await hydrateLocalState(profile, progress);
    document.querySelector("#adminNav").hidden = profile.role !== "admin";
    document.documentElement.dataset.auth = "ready";
    gate.hidden = true;
    shell.hidden = false;
    await loadApplication();
  }

  function showLogin() {
    clearUserSession();
    document.documentElement.dataset.auth = "login";
    shell.hidden = true;
    gate.hidden = false;
    form.hidden = false;
    resetForm.hidden = true;
    forgotButton.hidden = false;
    backToLoginButton.hidden = true;
    authTitle.textContent = "Acesse sua formação.";
    setBusy(false);
    passwordInput.value = "";
    window.setTimeout(() => emailInput.focus(), 80);
  }

  function showPasswordReset() {
    document.documentElement.dataset.auth = "reset";
    shell.hidden = true;
    gate.hidden = false;
    form.hidden = true;
    resetForm.hidden = false;
    forgotButton.hidden = true;
    backToLoginButton.hidden = false;
    authTitle.textContent = "Crie sua nova senha.";
    setMessage("Use pelo menos 8 caracteres.");
    window.setTimeout(() => newPasswordInput.focus(), 80);
  }

  async function boot() {
    const isLocalPreview = location.hostname === "127.0.0.1" || location.hostname === "localhost";
    if (isLocalPreview) {
      window.LowLabAuth = {
        user: null,
        profile: { role: "student", status: "active" },
        syncFromLocalStorage: async () => {},
        setLessonCompletion: async () => null,
        client: { auth: { signOut: async () => {} } },
      };
      document.documentElement.dataset.auth = "ready";
      document.querySelector("#adminNav").hidden = true;
      gate.hidden = true;
      shell.hidden = false;
      await loadApplication();
      return;
    }
    if (!window.supabase || !config.url || !config.anonKey || config.url.startsWith("__")) {
      setMessage("A autenticação está sendo configurada. Tente novamente em alguns minutos.", "error");
      return;
    }
    const client = window.supabase.createClient(config.url, config.anonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" },
    });
    window.LowLabAuth = { client, user: null, profile: null, syncFromLocalStorage,
      setLessonCompletion: async (lessonId, complete) => {
        const { data, error } = await client.rpc("set_lowlab_lesson_completion", { lesson_id: lessonId, is_complete: complete });
        if (error || !data?.[0]) throw new Error("Não foi possível salvar a conclusão.");
        return data[0];
      },
      clearUserStorage: clearUserSession };
    const { data } = await client.auth.getSession();
    const isRecovery = initialQuery.get("reset") === "1";
    if (data.session && (isRecovery || isInviteFlow)) {
      showPasswordReset();
    } else if (data.session) {
      try {
        await openCampus(data.session);
      } catch (error) {
        await client.auth.signOut();
        showLogin();
        setMessage(error.message, "error");
      }
    } else {
      showLogin();
      if (authLinkError === "otp_expired") {
        setMessage("Este convite expirou. Solicite um novo link de acesso.", "error");
      } else if (authLinkError) {
        setMessage("Este link não é mais válido. Solicite um novo convite.", "error");
      }
    }
    client.auth.onAuthStateChange(async (event, session) => {
      if (event === "PASSWORD_RECOVERY") showPasswordReset();
      if (event === "SIGNED_IN" && session && isInviteFlow) showPasswordReset();
      if (event === "SIGNED_OUT") {
        showLogin();
        if (applicationLoaded) location.reload();
      }
    });
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const { data, error } = await window.LowLabAuth.client.auth.signInWithPassword({
      email: emailInput.value.trim(),
      password: passwordInput.value,
    });
    if (error || !data.session) {
      setBusy(false);
      setMessage("E-mail ou senha incorretos.", "error");
      return;
    }
    try { await openCampus(data.session); }
    catch (campusError) {
      await window.LowLabAuth.client.auth.signOut();
      setBusy(false);
      setMessage(campusError.message, "error");
    }
  });

  forgotButton.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    if (!email) {
      setMessage("Digite seu e-mail primeiro.", "error");
      emailInput.focus();
      return;
    }
    forgotButton.disabled = true;
    const redirectTo = `${location.origin}${location.pathname}?reset=1`;
    const { error } = await window.LowLabAuth.client.auth.resetPasswordForEmail(email, { redirectTo });
    forgotButton.disabled = false;
    setMessage(error ? "Não foi possível enviar agora." : "Se o cadastro existir, enviaremos as instruções por e-mail.", error ? "error" : "success");
  });

  resetForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = newPasswordInput.value;
    if (password.length < 8) {
      setMessage("A senha precisa ter pelo menos 8 caracteres.", "error");
      return;
    }
    if (password !== confirmPasswordInput.value) {
      setMessage("As senhas não são iguais.", "error");
      return;
    }
    resetSubmit.disabled = true;
    resetSubmit.textContent = "Salvando…";
    const { error } = await window.LowLabAuth.client.auth.updateUser({ password });
    resetSubmit.disabled = false;
    resetSubmit.textContent = "Salvar nova senha";
    if (error) {
      setMessage("Não foi possível salvar a nova senha. Abra novamente o link recebido.", "error");
      return;
    }
    history.replaceState({}, "", `${location.pathname}${location.hash || "#home"}`);
    setMessage("Senha atualizada. Você já pode entrar.", "success");
    await window.LowLabAuth.client.auth.signOut();
  });

  backToLoginButton.addEventListener("click", async () => {
    history.replaceState({}, "", `${location.pathname}${location.hash || "#home"}`);
    await window.LowLabAuth.client.auth.signOut();
    showLogin();
  });

  toggleButton.addEventListener("click", () => {
    const showing = passwordInput.type === "text";
    passwordInput.type = showing ? "password" : "text";
    toggleButton.textContent = showing ? "Mostrar" : "Ocultar";
  });

  window.addEventListener("DOMContentLoaded", boot);
})();
