const langE1 = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const deportivaNav = document.querySelector('.deportivaNav');
const envioNav = document.querySelector('.envioNav');
const servicioNav = document.querySelector('.servicioNav');
const topUno = document.querySelector('.topUno');
const topDos = document.querySelector('.topDos');
const topTres = document.querySelector('.topTres');
const descripcion = document.querySelector('.descripcion');
const tallas = document.querySelector('.tallas');
const guiaTallas = document.querySelector('.guiaTallas');
const tallasCM = document.querySelector('.tallasCM');
const carritoUno = document.querySelector('.carritoUno');

link.forEach(r => {
    r.addEventListener("click", () => {
        const attr = r.getAttribute('language');

        deportivaNav.textContent = changeLanguage[attr].deportivaNav;
        envioNav.textContent = changeLanguage[attr].envioNav;
        servicioNav.textContent = changeLanguage[attr].servicioNav;
        topUno.textContent = changeLanguage[attr].topUno;
        topDos.textContent = changeLanguage[attr].topDos;
        topTres.textContent = changeLanguage[attr].topTres;
        descripcion.textContent = changeLanguage[attr].descripcion;
        tallas.textContent = changeLanguage[attr].tallas;
        guiaTallas.textContent = changeLanguage[attr].guiaTallas;
        tallasCM.textContent = changeLanguage[attr].tallasCM;
        carritoUno.textContent = changeLanguage[attr].carritoUno;
    });
});

let changeLanguage = {

    "espanish": {
        "deportivaNav": "ROPA DEPORTIVA",
        "envioNav": "INFORMACIÓN DE ENVÍO",
        "servicioNav": "SERVICIO AL CLIENTE",
        "topUno": "FOTOGRAFÍA UNO",
        "topDos": "FOTOGRAFÍA DOS",
        "topTres": "FOTOGRAFÍA TRES",
        "descripcion": "CAMISETA DEPORTIVA DE MALLA EN CONTRASTE UNICOLOR",
        "tallas": "Tallas disponibles",
        "guiaTallas": "Guía de tallas",
        "tallasCM": "Tallas en cm",
        "carritoUno": "AGREGAR AL CARRITO",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "topUno": "PHOTOGRAPHY ONE",
        "topDos": "PHOTOGRAPHY TWO",
        "topTres": "PHOTOGRAPHY THREE",
        "descripcion": "SOLID CONTRAST MESH SPORTS TEE",
        "tallas": "Available sizes",
        "guiaTallas": "Size guide",
        "tallasCM": "Size in cm",
        "carritoUno": "ADD",
    }
}