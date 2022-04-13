function pais() {
    var value = document.getElementById('opciones').value;
    switch (value) {
        case 'CR':
            Swal.fire({
                title: "Costa Rica",
                text: "Lo sentimos, pero desafortunadamente no podemos hacer envíos al país/región seleccionado temporalmente.",
                confirmButtonColor: "#ff7640",
                confirmButtonText: "Ok",
            });
            break;
        case 'Panamá':
            Swal.fire({
                title: "Panamá",
                html: '<p><strong>Método de envío: </strong>envío express.</p> <p><strong>Tiempo de envío: </strong>15-30 días laborales.</p><p><strong>Costes: </strong>$24.90.</p>',
                confirmButtonColor: "#ff7640",
                confirmButtonText: "Ok",
            });
            break;
        case 'COLO':
            Swal.fire({
                title: "Colombia",
                html: '<p><strong>Método de envío: </strong>envío económico.</p> <p><strong>Tiempo de envío: </strong>entrega estimada el día 17/08/2021 - 19/08/2021.</p><p><strong>Costes: </strong>$9.24.</p>',
                confirmButtonColor: "#ff7640",
                confirmButtonText: "Ok",
            });
            break;
    }
}

const langE1 = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const deportivaNav = document.querySelector('.deportivaNav');
const envioNav = document.querySelector('.envioNav');
const servicioNav = document.querySelector('.servicioNav');
const infoEnvio = document.querySelector('.infoEnvio');
const global = document.querySelector('.global');
const country = document.querySelector('.country');
const texto = document.querySelector('.texto');
const CRsorry = document.querySelector('.CRsorry');
const panama1 = document.querySelector('.panama1');
const panama2 = document.querySelector('.panama2');
const panama3 = document.querySelector('.panama3');
const colo1 = document.querySelector('.colo1');
const colo2 = document.querySelector('.colo2');
const colo3 = document.querySelector('.colo3');

link.forEach(r => {
    r.addEventListener("click", () => {
        const attr = r.getAttribute('language');

        deportivaNav.textContent = changeLanguage[attr].deportivaNav;
        envioNav.textContent = changeLanguage[attr].envioNav;
        servicioNav.textContent = changeLanguage[attr].servicioNav;
        infoEnvio.textContent = changeLanguage[attr].infoEnvio;
        global.textContent = changeLanguage[attr].global;
        country.textContent = changeLanguage[attr].country;
        texto.textContent = changeLanguage[attr].texto;
        CRsorry.textContent = changeLanguage[attr].CRsorry;
        panama1.textContent = changeLanguage[attr].panama1;
        panama2.textContent = changeLanguage[attr].panama2;
        panama3.textContent = changeLanguage[attr].panama3;
        colo1.textContent = changeLanguage[attr].colo1;
        colo2.textContent = changeLanguage[attr].colo2;
        colo3.textContent = changeLanguage[attr].colo3;
    });
});

let changeLanguage = {

    "espanish": {
        "deportivaNav": "ROPA DEPORTIVA",
        "envioNav": "INFORMACIÓN DE ENVÍO",
        "servicioNav": "SERVICIO AL CLIENTE",
        "infoEnvio": "INFORMACIÓN DE ENVÍO",
        "global": "Envíos a Nivel Global",
        "country": "Seleccionar país",
        "texto": "El plazo de envío es estimado y se cuenta a partir del momento en el que los paquetes salen del almacén para su envío y no desde la fecha de realización del pedido. Este plazo puede ser más largo de lo esperado, debido a una dirección no válida,procedimientos de despacho de aduanas u otros motivos. Para los pedidos enviados a Honduras, tenga en cuenta: Debe ser mayor de edad (+18 años), debe tener RTN (identificación fiscal) para despachar el envío una vez que llegue a Honduras.Sus envíos serán retenidos por la Aduana de Honduras para su respectivo proceso de liberación y pago de derechos e impuestos (se asociará costo adicional). Los pedidos enviados a Kenya estarán cargados con las tarifas correspondientes a las políticas de Aduanas de Kenya. Si tiene alguna consulta, por favor, contáctenos.",
        "CRsorry": "Lo sentimos, pero desafortunadamente no podemos hacer envíos al país/región seleccionado temporalmente.",
        "panama1": "Método de envío: envío express.",
        "panama2": "Tiempo de envío: 15-30 días laborales.",
        "panama3": "Costes: $24.90.",
        "colo1": "Método de envío: envío económico.",
        "colo2": "Tiempo de envío: 15-30 días laborales.",
        "colo3": "Costes: $9.24.",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "infoEnvio": "SHIPPING INFO",
        "global": "Ship from Global",
        "country": "Choose country",
        "texto": " Shipping time is estimated and commences from the date of shipping, rather than the date of order, and can take longer than expected date due to invalid address, customs clearance procedures or other causes.For orders sent to Honduras, please note: You must be of legal age (+18 years), must have RTN (Tax id) to clear the shipment once it arrives to Honduras. Your shipments will be held by the Honduran customs for their respective process of release and payment of duties and taxes (Additional cost will be associated).Orders sent to Kenya may be charged with tariffs according to the policy of Kenya Customs. If you have any question, please contact us.",
        "CRsorry": "Sorry, we are temporarily unable to ship to the country/region selected.",
        "panama1": "Shipping Method: express shipping.",
        "panama2": "Shipping Time: 15-30 Business Days.",
        "panama3": "Costs: $24.90.",
        "colo1": "Shipping Method: economic shipping.",
        "colo2": "Shipping Time: 15-30 Business Days.",
        "colo3": "Costs: $9.24.",
    }
}