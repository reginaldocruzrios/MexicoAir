

document.addEventListener('DOMContentLoaded', function () {
   
    ocultarSeccion();
    mostrarMenu();

});

function ocultarSeccion() {
    const enlace = document.querySelector('.vuelo');

    enlace.addEventListener('click' , function() {
        const vuelos = document.querySelector('#vuelos');
        const enlaceVuelos = document.querySelector('.enlace-vuelos');
        vuelos.classList.toggle('mostrar');
        enlaceVuelos.classList.toggle('border');
    });
}

function mostrarMenu() {
    const barra = document.querySelector('#barra');

    barra.addEventListener('click' , function() {
        const menuPrincipal = document.querySelector('#menuNav');
        menuPrincipal.classList.toggle('mostrar');
    });
}


