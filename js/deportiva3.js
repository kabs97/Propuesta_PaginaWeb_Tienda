window.onload = function() {
    document.getElementById("foto").onchange = function(e) {
        n = e.target.value;
        var archivo = "url('img/awTres" + n + ".png')";
        console.log(archivo);
        document.getElementById("resultado").style.backgroundImage = archivo;
    }
}

var acc = document.getElementsByClassName("guiaTallas");
var i;

// ciclo
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//animacion acordeon
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function carrito() {
    Swal.fire({
        icon: "success",
        text: "La prenda se ha agregado al carrito",
        confirmButtonColor: "#ff7640",
        confirmButtonText: "Ok",
    })
}






var modal = document.getElementById("modal1");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";

    //trae la ruta de la imagen y del alt nombre de la img
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}


function radio1() {
    var talla = document.getElementById('radio1').value;

    document.getElementById("texto").innerHTML = "Su talla es " + talla;

}

function radio2() {
    var talla = document.getElementById('radio2').value;

    document.getElementById("texto").innerHTML = "Su talla es " + talla;

}

function radio3() {
    var talla = document.getElementById('radio3').value;

    document.getElementById("texto").innerHTML = "Su talla es " + talla;

}

function radio4() {
    var talla = document.getElementById('radio4').value;

    document.getElementById("texto").innerHTML = "Su talla es " + talla;

}