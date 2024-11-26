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
        metaAhorro: parseFloat(metaAhorroUsuario.value)
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

 
buscarUsuario().then(function (respuesta) {
    let fila = document.getElementById("fila");

    // Limpiar el contenido de "fila" antes de agregar nuevos elementos
    fila.innerHTML = "";

    // Crear el título para los usuarios
    let tituloUsuarios = document.createElement("h2");
    tituloUsuarios.textContent = "USUARIOS";
    tituloUsuarios.classList.add("text-center", "mb-4"); 

    // Agregar el título a la fila
    fila.appendChild(tituloUsuarios);

    respuesta.forEach(function (usuario) {
        let columna = document.createElement("div");
        columna.classList.add("col-md-8", "mb-4");

        let tarjeta = document.createElement("div");
        tarjeta.classList.add("card", "h-100", "p-3", "shadow", "text-center");

        // Crear y agregar el nombre
        let nombreCard = document.createElement("h3");
        nombreCard.textContent = usuario.nombres;
        nombreCard.classList.add("card-title-card");

        // fecha
        let fechaCard = document.createElement("p");
        fechaCard.textContent = `Registro: ${usuario.fechaRegistro} `;
        fechaCard.classList.add("card-text");

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
        tarjeta.appendChild(fechaCard);
        tarjeta.appendChild(ubicacionCard);
        tarjeta.appendChild(metaAhorroCard);

        // Agregar la tarjeta a la columna y luego a la fila
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
    });
});
