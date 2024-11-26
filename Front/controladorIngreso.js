import { BuscarIngreso, RegistrarIngreso } from "./services/serviciosIngreso.js";

//Recoger los datos del form usando JS para el formulario usuario
let descripcionIngresoUsuario = document.getElementById("descripcionIngreso")
let valorIngresoUsuario = document.getElementById("valorIngreso")
let fechaIngresoUsuario = document.getElementById("fechaIngreso")

// variable que asocia el boton con el form
let botonRegistroIngreso = document.getElementById("btnRegistrarIngreso")

// Evento onclick corregido para el registro de ingreso
botonRegistroIngreso.addEventListener("click", function(e) {
    e.preventDefault();

    // Ajusta los nombres de los campos para que coincidan con lo que espera el backend
    let objetoEnvioDatosIngreso = {
        descripcion: descripcionIngresoUsuario.value,
        valor: valorIngresoUsuario.value,
        fecha: fechaIngresoUsuario.value,
    };

    console.log(objetoEnvioDatosIngreso);

    // Llamar a la función registraringreso y pasarle los datos.
    RegistrarIngreso(objetoEnvioDatosIngreso)
        .then(function (respuesta) {
            console.log("ingreso registrado:", respuesta);
            Swal.fire({
                title: "¡Éxito!",
                text: "El ingreso ha sido registrado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        })
        .catch(function (error) {
            console.log("Error al registrar ingreso:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar el ingreso.",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        });
});

 
    // Swal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });


// prueba de renderizacion con datos que viene del back
// quemar datos usando mock
// llamando la funcion que va al api a buscar usuarios

// buscarUsuario().then(function (respuesta) {
//     let fila = document.getElementById("fila");

//     // Limpiar el contenido de "fila" antes de agregar nuevos elementos
//     fila.innerHTML = "";

//     respuesta.forEach(function(usuario) {
//         let columna = document.createElement("div");
//         columna.classList.add("col-md-8", "mb-4");  // Espaciado entre columnas y filas

//         let tarjeta = document.createElement("div");
//         tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

//         let nombreCard = document.createElement("h3");
//         nombreCard.textContent = usuario.nombres;

//         tarjeta.appendChild(nombreCard);
//         columna.appendChild(tarjeta);
//         fila.appendChild(columna);
//     });
// });

// Simula la respuesta del backend con datos reales enviados desde el formulario
// BuscarIngreso().then(function (respuesta) {
//     let fila = document.getElementById("fila2");

//     // Limpiar el contenido de "fila" antes de agregar nuevos elementos
//     fila.innerHTML = "";

//     respuesta.forEach(function (ingreso) {
//         let columna = document.createElement("div");
//         columna.classList.add("col-md-8", "mb-4");

//         let tarjeta = document.createElement("div");
//         tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

//         // Crear y agregar la descripción
//         let descripcionCard = document.createElement("h3");
//         descripcionCard.textContent = ingreso.descripcion;
//         descripcionCard.classList.add("card-title");

//         // Crear y agregar el valor
//         let valorCard = document.createElement("p");
//         valorCard.textContent = `Valor ingreso: $${ingreso.valor}`;
//         valorCard.classList.add("card-text");

//         // Crear y agregar la fecha
//         let fechaCard = document.createElement("p");
//         fechaCard.textContent = `Fecha: ${ingreso.fecha}`;
//         fechaCard.classList.add("card-text");

//         // Agregar los elementos a la tarjeta
//         tarjeta.appendChild(descripcionCard);
//         tarjeta.appendChild(valorCard);
//         tarjeta.appendChild(fechaCard);

//         // Agregar la tarjeta a la columna y luego a la fila
//         columna.appendChild(tarjeta);
//         fila.appendChild(columna);
//     });
// });





BuscarIngreso().then(function (respuesta) {
    let fila = document.getElementById("fila2");

    // Limpiar el contenido de "fila" antes de agregar nuevos elementos
    fila.innerHTML = "";

    // Crear el título para los usuarios
    let tituloUsuarios = document.createElement("h2");
    tituloUsuarios.textContent = "INGRESO";
    tituloUsuarios.classList.add("text-center", "mb-4"); // Opcional: agrega clases para el estilo

    // Agregar el título a la fila
    fila.appendChild(tituloUsuarios);

    respuesta.forEach(function (ingreso) {
        let columna = document.createElement("div");
        columna.classList.add("col-md-8", "mb-4");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

        // Crear y agregar la descripción
        let descripcionCard = document.createElement("h3");
        descripcionCard.textContent = ingreso.descripcion;
        descripcionCard.classList.add("card-title");

        // Crear y agregar el valor
        let valorCard = document.createElement("p");
        valorCard.textContent = `Valor ingreso: $${ingreso.valor}`;
        valorCard.classList.add("card-text");

        // Crear y agregar la fecha
        let fechaCard = document.createElement("p");
        fechaCard.textContent = `Fecha: ${ingreso.fecha}`;
        fechaCard.classList.add("card-text");

        // Agregar los elementos a la tarjeta
        tarjeta.appendChild(descripcionCard);
        tarjeta.appendChild(valorCard);
        tarjeta.appendChild(fechaCard);

        // Agregar la tarjeta a la columna y luego a la fila
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});
