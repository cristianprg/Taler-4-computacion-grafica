let cadenas = [];
        
        // Función para agregar una cadena a la lista y calcular las longitudes
function agregarCadena() {
    const inputCadena = document.getElementById("cadena");
    const cadena = inputCadena.value.trim();
            
    if (cadena !== "") {
        cadenas.push(cadena);
        mostrarLongitudes();
        inputCadena.value = ""; // Limpiar el campo de entrada
    } else {
        alert("Por favor, ingrese una cadena válida.");
    }
}

        // Función para mostrar la longitud de cada cadena y la sumatoria total
function mostrarLongitudes() {
    let longitudesHTML = "<h3>Longitudes de las Cadenas:</h3>";
    let sumatoria = 0;

    cadenas.forEach((cadena, index) => {
        let longitud = cadena.length;
        longitudesHTML += `<p>Cadena ${index + 1}: "${cadena}" - Longitud: ${longitud}</p>`;
        sumatoria += longitud;
    });

    document.getElementById("longitudes").innerHTML = longitudesHTML;
    document.getElementById("resultado").innerHTML = `Sumatoria total de las longitudes: ${sumatoria}`;
}