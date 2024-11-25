import { buscarUsuario, registrarUsuario } from "./services/serviciosUsuario.js"

//Recoger los datos del form usando JS para el formulario usuario
let nombreUsuario = document.getElementById("nombresUsuario")
let fechaRegistro = document.getElementById("fechaRegistro")
let ciudadUsuario = document.getElementById("ciudadUsuario")
let metaAhorroUsuario = document.getElementById("metaAhorroUsuario")

// variable que asocia el boton con el form
let botonRegistroUsuario = document.getElementById("btnRegistrarUsuario")


// Evento onclick corregido para el registro de usuario
botonRegistroUsuario.addEventListener("click", function(evento) {
    evento.preventDefault();

    // Ajusta los nombres de los campos para que coincidan con lo que espera el backend
    let objetoEnvioDatosUsuario = {
        nombres: nombreUsuario.value,
        fechaRegistro: fechaRegistro.value,
        ciudad: ciudadUsuario.value,
        metaAhorro: parseFloat(metaAhorroUsuario.value)  // Convertir a número flotante
    };

    console.log(objetoEnvioDatosUsuario);

    // Llamar a la función registrarUsuario y pasarle los datos
    registrarUsuario(objetoEnvioDatosUsuario)
        .then(function (respuesta) {
            console.log("Usuario registrado:", respuesta);
            Swal.fire({
                title: "¡Éxito!",
                text: "El usuario ha sido registrado correctamente.",
                icon: "success",
                confirmButtonText: "Aceptar"
            });
        })
        .catch(function (error) {
            console.log("Error al registrar usuario:", error);
            Swal.fire({
                title: "¡Error!",
                text: "Hubo un problema al registrar el usuario.",
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


//prueba de renderizacion con datos que viene del back
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
buscarUsuario().then(function (respuesta) {
    let fila = document.getElementById("fila");

    // Limpiar el contenido de "fila" antes de agregar nuevos elementos
    fila.innerHTML = "";

    respuesta.forEach(function (usuario) {
        let columna = document.createElement("div");
        columna.classList.add("col-md-8", "mb-4");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

        // Crear y agregar el nombre
        let nombreCard = document.createElement("h3");
        nombreCard.textContent = usuario.nombres;
        nombreCard.classList.add("card-title");

        // Crear y agregar la ubicación
        let ubicacionCard = document.createElement("p");
        ubicacionCard.textContent = `Ubicación: ${usuario.ciudad}`;
        ubicacionCard.classList.add("card-text");

        // Crear y agregar la meta de ahorro
        let metaAhorroCard = document.createElement("p");
        metaAhorroCard.textContent = `Meta de ahorro: $${usuario.metaAhorro.toLocaleString()}`;
        metaAhorroCard.classList.add("card-text");

        // Agregar los elementos a la tarjeta
        tarjeta.appendChild(nombreCard);
        tarjeta.appendChild(ubicacionCard);
        tarjeta.appendChild(metaAhorroCard);

        // Agregar la tarjeta a la columna y luego a la fila
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});





// let usuarios = [
//     {id: 100, nombres: "juan jose", metaAhorro: 200000},
//     {id: 98, nombres: "javier", metaAhorro: 129000},
//     {id: 34, nombres: "jimene", metaAhorro: 23322}
// ]

//recorrer el areglo de datos del mock

// let fila = document.getElementById("fila")
// usuarios.forEach(function(usuario){
//     console.log(usuario)
//     let columna = document.createElement("div")
//     columna.classList.add("col-md-4")

//     let tarjeta = document.createElement("div")
//     tarjeta.classList.add("card", "h-100", "p-5", "shadow" )

//     let nombreCard = document.createElement("h3")
//     nombreCard.textContent=usuario.nombres

//     tarjeta.appendChild(nombreCard)
//     columna.appendChild(tarjeta)
//     fila.appendChild(columna)
// })
