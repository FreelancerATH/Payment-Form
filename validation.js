document.querySelectorAll('#paymentForm input, #paymentForm select').forEach(function (element) {
    element.addEventListener('input', validateField);
});

function validateField(event) {
    let field = event.target;
    let errorElement = document.getElementById(field.id + 'Error');
    let isValid = true;

    if (field.id === 'cardNumber' && (field.value === '' || field.value.length !== 16)) {
        errorElement.textContent = 'El número de tarjeta debe contener 16 digitos';
        isValid = false;
    } else if (field.id === 'cvc' && (field.value === '' || field.value.length !== 4)) {
        errorElement.textContent = 'El CVC debe contener 4 digitos.';
        isValid = false;
    } else if (field.id === 'amount' && (field.value === '' || isNaN(field.value.replace('$', '')))) {
        errorElement.textContent = 'Error de formato, solo debe ser digitos';
        isValid = false;
    } else if (field.id === 'firstName' && field.value === '') {
        errorElement.textContent = 'El Nombre es requerido';
        isValid = false;
    } else if (field.id === 'lastName' && field.value === '') {
        errorElement.textContent = 'El Apellido es requerido';
        isValid = false;
    } else if (field.id === 'city' && field.value === '') {
        errorElement.textContent = 'La ciudad es requerida';
        isValid = false;
    } else if (field.id === 'state' && (field.value === '' || field.value === 'Selecciona una opción')) {
        errorElement.textContent = 'El estado es requerido';
        isValid = false;
    } else if (field.id === 'postalCode' && (field.value === '' || field.value.length !== 5)) {
        errorElement.textContent = 'El codigo postal solo debe tener 5 digitos.';
        isValid = false;
    } else {
        errorElement.textContent = '';
    }

    field.classList.toggle('is-invalid', !isValid);
}

document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValidForm = true;

    document.querySelectorAll('#paymentForm input, #paymentForm select').forEach(function (field) {
        let event = new Event('input');
        field.dispatchEvent(event);
        if (field.classList.contains('is-invalid')) {
            isValidForm = false;
        }
    });

    if (isValidForm) {
        alert('Form submitted successfully!');
    }
});