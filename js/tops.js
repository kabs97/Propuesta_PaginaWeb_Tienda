function foto1() {
    var foto1 = document.getElementById("myPhoto1");
    Swal.fire({
        text: "Top de tirantes corta con puntada en contraste",
        imageUrl: "img/top1.webp",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "tops1.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto2() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "Dos piezas top tank corto tejido de canalé",
        imageUrl: "img/top4.webp",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "tops2.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto3() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "Dos piezas top tank corto tejido de canalé",
        imageUrl: "img/top7.webp",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "tops3.html"
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
        "seleccionTops": "SELECCIÓN DE TOPS",
        "topUno": "Top de tirantes corta con puntada en contraste",
        "topDos": "Dos piezas top tank corto tejido de canalé ",
        "topTres": "Top corto con estampado de figura",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "seleccionTops": "TOPS SELECTION",
        "topUno": "Contrast Stitch Cropped Tank Top",
        "topDos": "Two-piece ribbed knit crop tank top",
        "topTres": "Cropped top with figure print ",
    }
}