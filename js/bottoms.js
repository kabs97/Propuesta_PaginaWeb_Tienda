function foto1() {
    var foto1 = document.getElementById("myPhoto1");
    Swal.fire({
        text: "Falda bajo fruncido unicolor",
        imageUrl: "img/bottoms1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "bottoms1.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto2() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "Falda de muslo con abertura floral",
        imageUrl: "img/bottomsDos1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "bottoms2.html"
        } else {
            result.dismiss === Swal.DismissReason.cancel
        }

    })
}

function foto3() {
    var foto1 = document.getElementById("myPhoto2");
    Swal.fire({
        text: "Pantalones a medida de cintura alta unicolor",
        imageUrl: "img/bottomsTres1.png",
        imageHeight: 500,
        confirmButtonColor: "#ff7640",
        showCancelButton: true,
        cancelButtonText: "Seguir viendo la galeria",
        confirmButtonText: "Ver prenda",
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "bottoms3.html"
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
        "seleccionTops": "SELECCIÓN DE BOTTOMS",
        "topUno": "Falda bajo fruncido unicolor",
        "topDos": "Falda de muslo con abertura floral",
        "topTres": "Pantalones a medida de cintura alta unicolor",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "seleccionTops": "BOTTOMS SELECTION",
        "topUno": "Solid Pleated Hem Skirt",
        "topDos": "Ditsy Floral Split Thigh Skirt",
        "topTres": "Solid High Rise Tailored Pants",
    }
}