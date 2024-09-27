function esCorreoElectronico(cadena) {
            // Expresión regular para validar correo electrónico
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(cadena);
}

        // Función que se ejecuta al presionar el botón
function validarCorreo() {
            // Obtener el valor del input
    const correo = document.getElementById("correo").value;

            // Verificar si la cadena es un correo electrónico
    if (esCorreoElectronico(correo)) {
        document.getElementById("resultado").innerHTML = "La cadena ingresada es un correo electrónico válido.";
    } else {
        document.getElementById("resultado").innerHTML = "La cadena ingresada NO es un correo electrónico válido.";
    }
}