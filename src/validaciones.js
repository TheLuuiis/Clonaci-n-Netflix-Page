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
    };

    
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
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/
    return passwordRegex.test(password);
} 