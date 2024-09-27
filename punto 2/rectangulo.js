function dibujarRectangulo() {
            // Obtener los valores ingresados por el usuario
    const caracter = document.getElementById("caracter").value;
    const ancho = parseInt(document.getElementById("ancho").value);
    const alto = parseInt(document.getElementById("alto").value);
            
            // Validar la entrada
    if (caracter === "" || isNaN(ancho) || isNaN(alto) || ancho <= 0 || alto <= 0) {
        alert("Por favor, ingrese valores válidos para el carácter, el ancho y el alto.");
        return;
    }

            // Generar el rectángulo
    let rectangulo = "";
    for (let i = 0; i < alto; i++) {
        for (let j = 0; j < ancho; j++) {
            rectangulo += caracter;
        }
        rectangulo += "\n"; // Salto de línea al final de cada fila
    }

            // Mostrar el rectángulo en el div con id="rectangulo"
    document.getElementById("rectangulo").textContent = rectangulo;
}