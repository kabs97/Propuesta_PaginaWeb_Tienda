var foto = 1;
var micarrusel = {};
var total = 0;

micarrusel = [{ imageurl: "img/carrusel1.png" }, { imageurl: "img/carrusel2.png" }, { imageurl: "img/carrusel3.png" }];

var cambiar = function(mas) {
    total = micarrusel.length;
    foto = foto + mas;
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        foto = total;
    }

    document.thumb.src = micarrusel[foto - 1].imageurl;
}

function cambio1() {
    document.getElementById("img1").setAttribute("src", "img/categorias-04.png");;
}

function cambio2() {
    document.getElementById("img1").setAttribute("src", "img/categorias-01.png");
}

function cambio3() {
    document.getElementById("img2").setAttribute("src", "img/categorias-05.png");;
}

function cambio4() {
    document.getElementById("img2").setAttribute("src", "img/categorias-02.png");
}

function cambio5() {
    document.getElementById("img3").setAttribute("src", "img/categorias-06.png");;
}

function cambio6() {
    document.getElementById("img3").setAttribute("src", "img/categorias-03.png");
}


const langE1 = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const deportivaNav = document.querySelector('.deportivaNav');
const envioNav = document.querySelector('.envioNav');
const servicioNav = document.querySelector('.servicioNav');
const somos = document.querySelector('.somos');
const frase = document.querySelector('.frase');
const compra = document.querySelector('.compra');
const deportiva = document.querySelector('.deportiva');

link.forEach(r => {
    r.addEventListener("click", () => {
        const attr = r.getAttribute('language');

        deportivaNav.textContent = changeLanguage[attr].deportivaNav;
        envioNav.textContent = changeLanguage[attr].envioNav;
        servicioNav.textContent = changeLanguage[attr].servicioNav;
        somos.textContent = changeLanguage[attr].somos;
        frase.textContent = changeLanguage[attr].frase;
        compra.textContent = changeLanguage[attr].compra;
        deportiva.textContent = changeLanguage[attr].deportiva;
    });
});

let changeLanguage = {

    "espanish": {
        "deportivaNav": "ROPA DEPORTIVA",
        "envioNav": "INFORMACIÓN DE ENVÍO",
        "servicioNav": "SERVICIO AL CLIENTE",
        "somos": "Somos una plataforma internacional de comercio online enfocada en la ropa femina. Listos para ofrecer el mejor servicio desde octubre del 2008.",
        "frase": "TODO MUNDO TIENE DERECHO A DISFRUTAR DE LA BELLEZA DE LA MODA",
        "compra": "COMPRA POR CATEGORÍAS",
        "deportiva": "ROPA DEPORTIVA",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "somos": "SHEIN is a international fast fashion e-commerce company mainly focused on women's wear. Ready to offer the best service since 2008.",
        "frase": "EVERYONE CAN ENJOY THE BEAUTY OF FASHION",
        "compra": "BUY BY CATEGORY",
        "deportiva": "ACTIVE WEAR",
    }
}