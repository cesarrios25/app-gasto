import { BuscarCategoria, RegistrarCategoria } from "./services/serviciosCategoria.js";

//Recoger los datos del form usando JS para el formulario usuario
let nombreCategoriaUsuario = document.getElementById("nombreCategoria")
let descripcionCategoriaUsuario = document.getElementById("descripcionCategoria")
let valorCategoriaUsuario = document.getElementById("valorCategoria")
let fechaCategoriaUsuario = document.getElementById("fechaCategoria")


// variable que asocia el boton con el form
let botonRegistroCategoria = document.getElementById("btnRegistrarCategoria")

// Evento onclick corregido para el registro de ingreso
botonRegistroCategoria.addEventListener("click", function(e) {
    e.preventDefault();

    // Ajusta los nombres de los campos para que coincidan con lo que espera el backend
    let objetoEnvioDatosCategoria = {
        nombre: nombreCategoriaUsuario.value,
        descripcion: descripcionCategoriaUsuario.value,
        valor: valorCategoriaUsuario.value,
        fecha: fechaCategoriaUsuario.value,
    };

    console.log(objetoEnvioDatosCategoria);

    // Llamar a la función registraringreso y pasarle los datos.
    RegistrarCategoria(objetoEnvioDatosCategoria)
        .then(function (respuesta) {
            console.log("Categoria registrado:", respuesta);
            Swal.fire({
                title: "¡Éxito!",
                text: "La categoria ha sido registrada correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        })
        .catch(function (error) {
            console.log("Error al registrar la categoria:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar la categoria.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        });
});

// Simula la respuesta del backend con datos reales enviados desde el formulario
BuscarCategoria().then(function (respuesta) {
    let fila = document.getElementById("fila4");

    // Limpiar el contenido de "fila" antes de agregar nuevos elementos
    fila.innerHTML = "";

    // Crear el título para los gastos
    let tituloCategoria = document.createElement("h2");
    tituloCategoria.textContent = "CATEGORÍA";
    tituloCategoria.classList.add("text-center", "mb-4"); 

    // Agregar el título a la fila  
    fila.appendChild(tituloCategoria);

    respuesta.forEach(function (categoria) {
        let columna = document.createElement("div");
        columna.classList.add("col-md-8", "mb-4");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

        // Crear y agregar el nombre del gasto
        let nombreCard = document.createElement("h3");
        nombreCard.textContent = categoria.nombre; 
        nombreCard.classList.add("card-title");

        // Crear y agregar la descripción
        let descripcionCard = document.createElement("p");
        descripcionCard.textContent = "Descripción: " + categoria.descripcion;
        descripcionCard.classList.add("card-text");

        // Crear y agregar el valor
        let valorCard = document.createElement("p");
        valorCard.textContent = "Valor: " + categoria.valor;
        valorCard.classList.add("card-text");

        // Crear y agregar la fecha
        let fechaCard = document.createElement("p");
        fechaCard.textContent = "Fecha: " + categoria.fecha;
        fechaCard.classList.add("card-text");

        // Agregar los elementos a la tarjeta
        tarjeta.appendChild(nombreCard);
        tarjeta.appendChild(descripcionCard);
        tarjeta.appendChild(valorCard);
        tarjeta.appendChild(fechaCard);

        // Agregar la tarjeta a la columna y luego a la fila
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});





