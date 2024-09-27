function esBisiesto(anio) {
            return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
        }

        // Función para contar los años bisiestos en un intervalo
        function contarAniosBisiestos(inicio, fin) {
            let contador = 0;
            for (let anio = inicio; anio <= fin; anio++) {
                if (esBisiesto(anio)) {
                    contador++;
                }
            }
            return contador;
        }

        // Función que se llama al presionar el botón
        function calcularBisiestos() {
            // Obtener los valores de los inputs
            const anioInicio = parseInt(document.getElementById("inicio").value);
            const anioFin = parseInt(document.getElementById("fin").value);

            // Validar que los valores sean números y el inicio no sea mayor que el fin
            if (isNaN(anioInicio) || isNaN(anioFin) || anioInicio > anioFin) {
                document.getElementById("resultado").innerHTML = "Por favor, ingrese un intervalo de años válido.";
                return;
            }

            // Calcular el total de años bisiestos
            const totalBisiestos = contarAniosBisiestos(anioInicio, anioFin);
            document.getElementById("resultado").innerHTML = `Hay ${totalBisiestos} años bisiestos entre ${anioInicio} y ${anioFin}.`;
        }