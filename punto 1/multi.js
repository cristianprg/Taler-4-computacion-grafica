// Función para mostrar la tabla de multiplicación
function mostrarTabla() {
            // Obtener los valores ingresados por el usuario
    const numero = parseInt(document.getElementById("numero").value);
    const limite = parseInt(document.getElementById("limite").value);

            // Validar la entrada
    if (isNaN(numero) || isNaN(limite) || numero <= 0 || limite <= 0) {
        alert("Por favor, ingrese valores válidos para el número y el límite.");
        return;
    }

            // Generar la tabla de multiplicación
    let tabla = "";
    for (let i = 1; i <= limite; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    // Mostrar la tabla en el div con id="tablaMultiplicacion"
    document.getElementById("tablaMultiplicacion").textContent = tabla;
}