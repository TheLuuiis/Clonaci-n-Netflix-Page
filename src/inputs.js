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