'use strict';

// <    >  =>

const inputs = document.querySelectorAll('.inputs');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focus-active');
    });

    input.addEventListener('blur', () => {
        input.classList.add('focus-active');
    });
});

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
            }        }    }}
document.getElementById("languageSelector").addEventListener("change", changeLanguage);

changeLanguage();

// <    >  =>

const form = document.getElementById('loginForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validación del campo de correo electrónico
    if (!email.value.trim()) {
        emailError.textContent = 'Campo obligatorio';
        errorInputs();
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        emailError.textContent = 'Correo electrónico no válido';
        errorInputs();
        isValid = false;
    } else {
        emailError.textContent = '';
        errorInputs();
    }
    
    if (!password.value.trim()) {
        passwordError.textContent = 'Campo obligatorio';
        errorInputs();
        isValid = false;
    } else if(!isValidPassword(password.value.trim())) {
        passwordError.textContent = 'Contraseña no válida';
        errorInputs();
        isValid = false;
    } else {
        passwordError.textContent = '';
        errorInputs();
    }

    if (!isValid) {
        event.preventDefault(); 
    }
});

// Error inputs
const errorInputs = () => {
    email.style.border = '1px solid red';
    password.style.border = '1px solid red';
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.test(password);
}
