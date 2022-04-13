function mostrar() {
    if (document.getElementById('radio1').checked) {
        cliente1();
    }
    if (document.getElementById('radio2').checked) {
        cliente2();
    }
}

function cliente1() {
    Swal.fire({
        title: "Preguntas Frecuentes",
        iconColor: "#cbc5c14d",
        imageUrl: "img/devolucion-03.png",
        imageWidht: 100,
        imageHeight: 100,
        html: '<p><strong>¿Cómo puedo realizar un pedido?</strong>     Paso 1: Inicie sesión en su cuenta SHEIN. Paso 2: Agregue algunos artículos en su cesta de compras. Paso 3: Verifique cuando se complete la selección de artículos. Paso 4: Complete la información de envío y facturación. Paso 5: Complete la información de pago y luego pulse en el botón CONTINUAR para completar la compra.</p><p><strong>¿Cómo puedo hacer el seguimiento de mi pedido?</strong> Por norma general, le enviaremos un correo electrónico con la información de seguimiento después de que se envíe el pedido.</p><p><strong>¿Puedo cambiar o modificar mi pedido?</strong> La dirección de envío o los artículos se pueden modificar antes de ser enviados.</p>',
        confirmButtonText: "Gracias",
        confirmButtonColor: "#ff7640",
    })
}

function cliente2() {
    Swal.fire({
        title: "Políticas de devolución",
        iconColor: "#cbc5c14d",
        imageUrl: "img/devolucion-02.png",
        imageWidht: 100,
        imageHeight: 100,
        html: '<p><strong>1.</strong>     Por favor, contacte con Servicio al Cliente, enviando un mensaje en nuestra web, indicando el/los artículo/s que le gustaría devolver y la razón. Le contestaremos en 24 horas. Le agradeceremos mucho su paciencia.</p><p><strong>2.</strong> Una vez recibidas las instrucciones de devolución por nuestra parte, por favor, embale el/los artículo/s a devolver en su envoltorio original.</p><p><strong>3.</strong> Deje el paquete en la oficina de correos local.</p><p><strong>4.</strong>  La mayoría de las devoluciones son procesadas en los siguientes 5 días laborables una vez recibido el paquete. Realizaremos el reembolso a su cartera SEHIN si no hemos sido informados específicamente de realizarlo a su cuenta original de pago. El importe de su Cartera, puede ser usado en su próxima compra o ser retirado a su cuenta original de pago. Una vez que el reembolso sea realizado, recibirá un email de confirmación.</p>',
        confirmButtonText: "Gracias",
        confirmButtonColor: "#ff7640",
    })
}


function mostrar() {
    if (document.getElementById('radio1').checked) {
        cliente1();
    }
    if (document.getElementById('radio2').checked) {
        cliente2();
    }
}

function validar_datos() {
    var nombre = document.getElementById('userTXT').value;
    var correo = document.getElementById('correoTXT').value;
    var area = document.getElementById('areaTXT').value;
    var pais = document.getElementById('pais').value;


    if (nombre == "" || correo == "" || area == "" || pais == "") {
        alert('Faltan datos, porfavor llene de nuevo el formulario');
    } else
    if (area.length > 100) {
        alert("El comentario debe tener un máximo de 100 caracteres");
        return;
    } else {
        alert('Los datos han sido enviados, pronto nos comunicaremos con usted')
    }
}



const langE1 = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const deportivaNav = document.querySelector('.deportivaNav');
const envioNav = document.querySelector('.envioNav');
const servicioNav = document.querySelector('.servicioNav');
const servicioCliente = document.querySelector('.servicioCliente');
const pregunta = document.querySelector('.pregunta');
const preguntasFrecuentes = document.querySelector('.preguntasFrecuentes');
const politicas = document.querySelector('.politicas');
const mostrarBTN = document.querySelector('.mostrarBTN');
const comunicate = document.querySelector('.comunicate');
const nombre = document.querySelector('.nombre');
const nombreAyuda = document.querySelector('.nombreAyuda');
const correo = document.querySelector('.correo');
const correoAyuda = document.querySelector('.correoAyuda');
const pais = document.querySelector('.pais');
const paisAyuda = document.querySelector('.paisAyuda');
const comentario = document.querySelector('.comentario');
const comentarioAyuda = document.querySelector('.comentarioAyuda');
const enviarBTN = document.querySelector('.enviarBTN');

link.forEach(r => {
    r.addEventListener("click", () => {
        const attr = r.getAttribute('language');

        deportivaNav.textContent = changeLanguage[attr].deportivaNav;
        envioNav.textContent = changeLanguage[attr].envioNav;
        servicioNav.textContent = changeLanguage[attr].servicioNav;
        servicioCliente.textContent = changeLanguage[attr].servicioCliente;
        pregunta.textContent = changeLanguage[attr].pregunta;
        preguntasFrecuentes.textContent = changeLanguage[attr].preguntasFrecuentes;
        politicas.textContent = changeLanguage[attr].politicas;
        mostrarBTN.textContent = changeLanguage[attr].mostrarBTN;
        comunicate.textContent = changeLanguage[attr].comunicate;
        nombre.textContent = changeLanguage[attr].nombre;
        nombreAyuda.textContent = changeLanguage[attr].nombreAyuda;
        correo.textContent = changeLanguage[attr].correo;
        correoAyuda.textContent = changeLanguage[attr].correoAyuda;
        pais.textContent = changeLanguage[attr].pais;
        paisAyuda.textContent = changeLanguage[attr].paisAyuda;
        comentario.textContent = changeLanguage[attr].comentario;
        comentarioAyuda.textContent = changeLanguage[attr].comentarioAyuda;
        enviarBTN.textContent = changeLanguage[attr].enviarBTN;
    });
});

let changeLanguage = {

    "espanish": {
        "deportivaNav": "ROPA DEPORTIVA",
        "envioNav": "INFORMACIÓN DE ENVÍO",
        "servicioNav": "SERVICIO AL CLIENTE",
        "servicioCliente": "SERVICIO AL CLIENTE",
        "pregunta": "¿En qué podemos ayudarte?",
        "preguntasFrecuentes": "Preguntas Frecuentes",
        "politicas": "Políticas de devolución",
        "mostrarBTN": "MOSTRAR",
        "comunicate": "COMUNÍCATE CON NOSOTROS",
        "nombre": "Nombre Completo",
        "nombreAyuda": "Escriba su nombre completo",
        "correo": "Correo electrónico",
        "correoAyuda": "Escriba su cuenta de correo",
        "pais": "Seleccione un país",
        "paisAyuda": "Seleccione su país de procedencia",
        "comentario": "Comentarios o consultas",
        "comentarioAyuda": "Límite máximo de 100 dígitos",
        "enviarBTN": "Enviar",
    },

    "english": {
        "deportivaNav": "ACTIVE WEAR",
        "envioNav": "SHIPPING INFO",
        "servicioNav": "COSTUMER SERVICE",
        "servicioCliente": "COSTUMER SERVICE",
        "pregunta": "How can we help you?",
        "preguntasFrecuentes": "Frequent Questions",
        "politicas": " Return Policy",
        "mostrarBTN": "SHOW",
        "comunicate": "CONTACT US",
        "nombre": "Full Name",
        "nombreAyuda": "Write your full name",
        "correo": "E-mail",
        "correoAyuda": "Write your e-mail",
        "pais": "Choose a country",
        "paisAyuda": "Choose your country of origin",
        "comentario": "Comments or inquiries",
        "comentarioAyuda": "Maximum limit of 100 digits",
        "enviarBTN": "Send",
    }
}