let cantidadNumeros = 0;
let numerosIngresados = [];
let sumatoria = 0;

        // Función para iniciar el proceso de ingreso de números
function iniciarIngreso() {
            // Obtener la cantidad de números que se van a introducir
    cantidadNumeros = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidadNumeros) || cantidadNumeros <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese una cantidad válida.";
        return;
    }

            // Reiniciar variables
    numerosIngresados = [];
    sumatoria = 0;
    document.getElementById("resultado").innerHTML = "";
    pedirNumero();
}

        // Función para pedir un número al usuario
function pedirNumero() {
    if (numerosIngresados.length < cantidadNumeros) {
        let mensaje = `Escriba un número`;
        if (numerosIngresados.length > 0) {
            mensaje = `Escriba un número distinto de ${numerosIngresados[numerosIngresados.length - 1]}`;
        }

        let numero = parseInt(prompt(mensaje));

                // Validar que el número sea distinto del anterior
        if (numerosIngresados.length > 0 && numero === numerosIngresados[numerosIngresados.length - 1]) {
            alert(`¡${numero} no es distinto de ${numerosIngresados[numerosIngresados.length - 1]}!`);
            pedirNumero();
        } else {
            numerosIngresados.push(numero);
            sumatoria += numero;
            pedirNumero();
        }
    } else {
                // Mostrar el resultado final
        document.getElementById("resultado").innerHTML = `Gracias por su colaboración. La sumatoria de todos los números es: ${sumatoria}.`;
    }
}