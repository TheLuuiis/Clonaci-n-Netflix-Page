// <    >  =>

// Objeto con las traducciones en inglés
const translationsEN = {
    loginTitle: "Log In",
    emailPlaceholder: "Email or phone number",
    passwordPlaceholder: "Password",
    loginButton: "Log In",
    forgotPassword: "Forgot Password?",
    rememberLabel: "Remember me",
    firstTime: "New to Netflix? ",
    signupLink: "Sign up now",
    recaptchaInfo: "This page is protected by Google reCAPTCHA to ensure you're not a bot. ",
    questions: "Questions? Call ",
    faqs: "FAQs",
    cookiePreferences: "Cookie Preferences",
    helpCenter: "Help Center",
    corporateInfo: "Corporate Information",
    termsOfUse: "Terms of Use",
    privacy: "Privacy"
};

// Objeto con las traducciones en español
const translationsES = {
    loginTitle: "Inicia Sesión",
    emailPlaceholder: "Email o número de teléfono",
    passwordPlaceholder: "Contraseña",
    loginButton: "Iniciar sesión",
    forgotPassword: "¿Olvidaste la contraseña?",
    rememberLabel: "Recuérdame",
    firstTime: "¿Primera vez en Netflix? ",
    signupLink: "Suscríbete ahora",
    recaptchaInfo: "Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. ",
    questions: "¿Preguntas? Llama al ",
    faqs: "Preguntas frecuentes",
    cookiePreferences: "Preferencias de cookies",
    helpCenter: "Centro de ayuda",
    corporateInfo: "Información corporativa",
    termsOfUse: "Términos de uso",
    privacy: "Privacidad"
};

// Función para cambiar el idioma de la página
function changeLanguage() {
    const languageSelect = document.getElementById("languageSelector");
    const selectedLanguage = languageSelect.value;
    const translations = selectedLanguage === "en" ? translationsEN : translationsES;

    // Aplicar las traducciones a los elementos de la página
    for (const key in translations) {
        if (translations.hasOwnProperty(key)) {
            const element = document.getElementById(key);
            if (element) {
                element.innerText = translations[key];
            };
        };
    };
};

document.getElementById("languageSelector").addEventListener("change", changeLanguage);

changeLanguage();