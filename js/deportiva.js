function foto1() {
    var foto1 = document.getElementById("myPhoto1");
    Swal.fire({
        text: "Leggings deportivos de banda ancha de space dye",
        imageUrl: "img/aw1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "deportiva1.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto2() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "SHEIN BASICS Sujetador deportivo de espalda con abertura",
        imageUrl: "img/awDos1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "deportiva2.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto3() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "Camiseta deportiva de malla en contraste unicolor",
        imageUrl: "img/awTres1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "deportiva3.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}


const langE1 = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const deportivaNav = document.querySelector('.deportivaNav');
const envioNav = document.querySelector('.envioNav');
const servicioNav = document.querySelector('.servicioNav');
const seleccionTops = document.querySelector('.seleccionTops');
const topUno = document.querySelector('.topUno');
const topDos = document.querySelector('.topDos');
const topTres = document.querySelector('.topTres');

link.forEach(r => {
    r.addEventListener("click", () => {
        const attr = r.getAttribute('language');

        deportivaNav.textContent = changeLanguage[attr].deportivaNav;
        envioNav.textContent = changeLanguage[attr].envioNav;
        servicioNav.textContent = changeLanguage[attr].servicioNav;
        seleccionTops.textContent = changeLanguage[attr].seleccionTops;
        topUno.textContent = changeLanguage[attr].topUno;
        topDos.textContent = changeLanguage[attr].topDos;
        topTres.textContent = changeLanguage[attr].topTres;
    });
});

let changeLanguage = {

    "espanish": {
        "deportivaNav": "ROPA DEPORTIVA",
        "envioNav": "INFORMACIÓN DE ENVÍO",
        "servicioNav": "SERVICIO AL CLIENTE",
        "seleccionTops": "SELECCIÓN DE ROPA DEPORTIVA",
        "topUno": "Leggings deportivos de banda ancha de space dye",
        "topDos": "SHEIN BASICS Sujetador deportivo de espalda con abertura",
        "topTres": "Camiseta deportiva de malla en contraste unicolor",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "seleccionTops": "ACTIVE WEAR SELECTION",
        "topUno": "Solid Wide Waistband Sports Leggings        ",
        "topDos": "SHEIN BASICS Cut Out Back Sports Bra",
        "topTres": "Solid Contrast Mesh Sports Tee",
    }
}