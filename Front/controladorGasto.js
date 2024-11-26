import { BuscarGasto, RegistrarGasto } from "./services/serviciosGasto.js";

//Recoger los datos del form usando JS para el formulario usuario
let descripcionGastoUsuario = document.getElementById("descripcionGasto")
let categoriaGastoUsuario = document.getElementById("categoriaGasto")
let valorGastoUsuario = document.getElementById("valorGasto")
let fechaGastoUsuario = document.getElementById("fechaGasto")
let idUsuarioGasto = document.getElementById("idUsuarioGasto")


// variable que asocia el boton con el form
let botonRegistroGasto = document.getElementById("btnRegistrarGasto")

// Evento onclick corregido para el registro de ingreso
botonRegistroGasto.addEventListener("click", function(e) {
    e.preventDefault();

    // Ajusta los nombres de los campos para que coincidan con lo que espera el backend
    let objetoEnvioDatosGasto = {
        descripcion: descripcionGastoUsuario.value,
        categoria: categoriaGastoUsuario.value,
        valor: valorGastoUsuario.value,
        fecha: fechaGastoUsuario.value,
        id_usuario: idUsuarioGasto.value
    };

    console.log(objetoEnvioDatosGasto);

    // Llamar a la función registraringreso y pasarle los datos.
    RegistrarGasto(objetoEnvioDatosGasto)
        .then(function (respuesta) {
            console.log("Gasto registrado:", respuesta);
            Swal.fire({
                title: "¡Éxito!",
                text: "El gasto ha sido registrado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        })
        .catch(function (error) {
            console.log("Error al registrar el gasto:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar el gasto.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        });
});


// Simula la respuesta del backend con datos reales enviados desde el formulario
BuscarGasto().then(function (respuesta) {
    let fila = document.getElementById("fila3");

    // Limpiar el contenido de "fila" antes de agregar nuevos elementos
    fila.innerHTML = "";

    // Crear el título para los gastos
    let tituloGastos = document.createElement("h2");
    tituloGastos.textContent = "GASTOS";
    tituloGastos.classList.add("text-center", "mb-4"); 

    // Agregar el título a la fila
    fila.appendChild(tituloGastos);

    respuesta.forEach(function (gasto) {
        let columna = document.createElement("div");
        columna.classList.add("col-md-8", "mb-4");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

        // Crear y agregar el nombre del gasto
        let nombreCard = document.createElement("h3");
        nombreCard.textContent = gasto.descripcion;
        nombreCard.classList.add("card-title");

        // Crear y agregar la categoría
        let categoriaCard = document.createElement("p");
        categoriaCard.textContent = "Categoría: " + gasto.categoria;
        categoriaCard.classList.add("card-text");

        // Crear y agregar el valor
        let valorCard = document.createElement("p");
        valorCard.textContent = "Valor: " + gasto.valor;
        valorCard.classList.add("card-text");

        // Crear y agregar la fecha
        let fechaCard = document.createElement("p");
        fechaCard.textContent = "Fecha: " + gasto.fecha;
        fechaCard.classList.add("card-text");

        // Agregar los elementos a la tarjeta
        tarjeta.appendChild(nombreCard);
        tarjeta.appendChild(categoriaCard);
        tarjeta.appendChild(valorCard);
        tarjeta.appendChild(fechaCard);

        // Agregar la tarjeta a la columna y luego a la fila
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});




