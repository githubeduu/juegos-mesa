document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const requiredFields = ['fullName', 'username', 'email', 'password', 'confirmPassword', 'dob'];
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value) {
            isValid = false;
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
        }
    });

    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        isValid = false;
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.classList.add('is-invalid');
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    const passwordPattern = /^(?=.*\d)(?=.*[A-Z]).{6,18}$/;
    if (!passwordPattern.test(password.value)) {
        isValid = false;
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    const dob = document.getElementById('dob');
    const birthDate = new Date(dob.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if (age < 13) {
        isValid = false;
        dob.classList.add('is-invalid');
    } else {
        dob.classList.remove('is-invalid');
    }

    if (isValid) {
        alert('Formulario enviado con éxito');       
    } else {
        alert('Por favor, corrige los errores en el formulario');
    }
});
