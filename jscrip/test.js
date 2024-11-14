/* expresiones regulares para la validación de datos */
const expresiones = {
    nombre: /^[A-Za-z\s]+$/,
    apellido: /([A-Za-z])\w+/,
    numeros: /^[0-9]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}

/* selección de elementos del DOM / HTML */
let formulario = document.getElementById('formulario');
let inputs = document.querySelectorAll('#formulario input');

/* función para presentar mensaje de error de validación  */
const mostrarError = (input, mensaje) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
}
/* función para ocultar mensaje */
const ocultarError = (input) => {
    const errorDiv = document.getElementById(`error-${input.name}`);
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
}
/* función de validación de formulario */
const validarFormulario = (e) => {
    let input = e.target;

    switch (input.name) {
        case 'nombre':
            if (expresiones.nombre.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Nombre inválido. Solo se permiten letras y espacios.');
            }
            break;

        case 'apellido':
            if (expresiones.apellido.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Apellido inválido. Solo se permiten letras y espacios.');
            }
            break;

        case 'numero':
            if (expresiones.numero.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Apellido inválido. Solo se permiten letras y espacios.');
            }
            break;

        case 'email':
            if (expresiones.email.test(input.value)) {
                input.classList.remove('div-form-incorrect');
                input.classList.add('div-form-correct');
                ocultarError(input);
            } else {
                input.classList.remove('div-form-correct');
                input.classList.add('div-form-incorrect');
                mostrarError(input, 'Email inválido. Asegúrate de usar un formato correcto.');
            }
            break;


    }
}

/* controla la validación de datos cada vez que se levanta una tecla */
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
});