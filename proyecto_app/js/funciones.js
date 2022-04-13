window.addEventListener('load', inicial, false);

function inicial() {

    var tabla = document.createElement('table');
    document.body.appendChild(tabla);

    var proveedoresSlt = document.getElementById('proveedoresSlt');
    var cantPrendasTxt = document.getElementById('cantPrendasTxt');
    var registrarBtn = document.getElementById('registrarBtn');
    var pagoBtn = document.getElementById('pagoBtn');
    var mayorProductorBtn = document.getElementById('mayorProductorBtn');
    var menorBtn = document.getElementById('menorBtn');
    var restablecerBtn = document.getElementById('restablecerBtn');
    var resultadoPr = document.getElementById('resultadoPr');
    var totalPrendasBtn = document.getElementById('totalPrendasBtn');
    var tercerResultado = document.getElementById('tercerResultado');
    var pagototal = document.getElementById('pagototal');
    var totalTopsBtn = document.getElementById('totalTopsBtn');
    var totalBottomsBtn = document.getElementById('totalBottomsBtn');
    var totalAWBtn = document.getElementById('totalAWBtn');



    var datos = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    registrarProveedores(1, 'Adrian', 'Blanco', 'Tops', 0, 0, 'ab@gmail.com', 60234566);
    registrarProveedores(2, 'Nahomy', 'Ávila', 'Bottoms', 0, 0, 'na@gmail.com', 75678746);
    registrarProveedores(3, 'Fabiana', 'Santamaría', 'Ropa Deportiva', 0, 0, 'fs@hotmail.com', 60138932);
    registrarProveedores(4, 'Brayan', 'Barrantes', 'Tops', 0, 0, 'bb@gmail.com', 60784256);
    registrarProveedores(5, 'Brayan', 'Pacheco', 'Bottoms', 0, 0, 'bp@hotmail.com', 83471578);
    registrarProveedores(6, 'Raquel', 'Vásquez', 'Ropa Deportiva', 0, 0, 'rv@gmail.com', 83768146);
    registrarProveedores(7, 'Karen', 'Barrantes', 'Tops', 0, 0, 'kb@gmail.com', 83251831);
    registrarProveedores(8, 'Shasling', 'Carranza', 'Bottoms', 0, 0, 'sc@hotmail.com', 71788942);
    registrarProveedores(9, 'Jose', 'Vásquez', 'Ropa Deportiva', 0, 0, 'jv@gmail.com', 70161368);
    registrarProveedores(10, 'Estefanía', 'Sancho', 'Tops', 0, 0, 'es@gmail.com', 60947923);
    registrarProveedores(11, 'Elizabeth', 'Rodríguez', 'Bottoms', 0, 0, 'er@gmail.com', 83768146);
    registrarProveedores(12, 'Luis Diego', 'Mora', 'Ropa Deportiva', 0, 0, 'ldm@gmail.com', 83251831);
    registrarProveedores(13, 'Daniel', 'Grant', 'Tops', 0, 0, 'dg@hotmail.com', 71788942);
    registrarProveedores(14, 'Valeria', 'Miranda', 'Bottoms', 0, 0, 'vm@gmail.com', 70161368);
    registrarProveedores(15, 'Pedro', 'Quesada', 'Ropa Deportiva', 0, 0, 'pq@gmail.com', 60947923);

    tablaProveedores();


    function registrarProveedores(id, nombre, apellido, tipo, cantidad, total, email, telefono) {
        datos[0].push(id);
        datos[1].push(nombre);
        datos[2].push(apellido);
        datos[3].push(tipo);
        datos[4].push(cantidad);
        datos[5].push(total);
        datos[6].push(email);
        datos[7].push(telefono)
    }


    function tablaProveedores() {


        tabla.innerHTML = '';

        var tr = document.createElement('tr');
        tabla.appendChild(tr);

        var th = document.createElement('th');
        th.innerHTML = 'ID';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Nombre';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Apellido';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tipo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Total';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Correo';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = 'Tel';
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML = '';
        tr.appendChild(th);


        for (var y = 0; y < datos[0].length; y++) {

            var tr = document.createElement('tr');
            tabla.appendChild(tr);

            td = document.createElement('td');
            td.innerHTML = datos[0][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[1][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[2][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[3][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[4][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[6][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = datos[7][y];
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML = "<button class='deleteBtn btn btn-outline-light' id='eliminarBtn'>Borrar</button>";
            tr.appendChild(td);

        }
    }

    function ingresarPrendas() {
        var fresasSumar = Number(cantPrendasTxt.value);
        id = Number(proveedoresSlt.value - 1);
        var cantPrendas = Number(datos[4][id]);
        cantPrendas = cantPrendas + Number(fresasSumar);
        datos[4][id] = cantPrendas;
    }

    registrarBtn.onclick = function registrarBtnOnClick() {
        ingresarPrendas();
        tablaProveedores();
        if (cantPrendasTxt.value == '') {
            Swal.fire({
                icon: 'error',
                text: 'Porfavor, indique la cantidad de prendas.',
            })
        } else {
            Swal.fire({
                icon: 'success',
                text: 'Las prendas se han registrado exitósamente.',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    function totalPrendas() {
        id = Number(proveedoresSlt.value - 1);
        var total = 0;
        resultadoPr.innerHTML = '';
        resultadoPr.classList.add('resultadoPr');
        for (var y = 0; y < datos[4].length; y++) {
            total = total + Number(datos[4][y]);
        }
        resultadoPr.innerHTML = 'La cantidad total de prendas compradas es de: ' + total;

    }

    function totalTops() {
        id = Number(proveedoresSlt.value - 1);
        var total = 0;
        resultadoPr.innerHTML = '';
        resultadoPr.classList.add('resultadoPr');
        for (var y = 0; y < datos.length; y++) {
            total = datos[4][0] + datos[4][3] + datos[4][6] + datos[4][9] + datos[4][12];
        }
        resultadoPr.innerHTML = 'La cantidad total de tops comprados es de: ' + total;
    }


    function totalBottoms() {
        id = Number(proveedoresSlt.value - 1);
        var total = 0;
        resultadoPr.innerHTML = '';
        resultadoPr.classList.add('resultadoPr');
        for (var y = 0; y < datos.length; y++) {
            total = datos[4][1] + datos[4][4] + datos[4][7] + datos[4][10] + datos[4][13];
        }
        resultadoPr.innerHTML = 'La cantidad total de bottoms comprados es de: ' + total;
    }

    function totalAW() {
        id = Number(proveedoresSlt.value - 1);
        var total = 0;
        resultadoPr.innerHTML = '';
        resultadoPr.classList.add('resultadoPr');
        for (var y = 0; y < datos.length; y++) {
            total = datos[4][2] + datos[4][5] + datos[4][8] + datos[4][11] + datos[4][14];
        }
        resultadoPr.innerHTML = 'La cantidad total de ropa deportiva comprada es de: ' + total;
    }



    function mayor() {
        var maxProveedor = datos[4][0];
        var posicionMayor = 0;
        tercerResultado.innerHTML = '';
        for (var y = 0; y < datos[4].length; y++) {

            if (maxProveedor < datos[4][y]) {
                maxProveedor = datos[4][y];
            }
        }
        posicionMayor = datos[4].indexOf(maxProveedor);
        tercerResultado.innerHTML = 'El cliente que ha realizado más compras: ' + datos[1][posicionMayor] + "    " + datos[2][posicionMayor];
    }

    function menor() {
        var menor = datos[4][0];
        var posicionMenor = 0;
        tercerResultado.innerHTML = '';
        for (var y = 0; y < datos[4].length; y++) {

            if (menor > datos[4][y]) {
                menor = datos[4][y];
            }
        }
        posicionMenor = datos[4].indexOf(menor);
        tercerResultado.innerHTML = 'El cliente que ha realizado menos compras : ' + datos[1][posicionMenor] + "    " + datos[2][posicionMenor];
    }




    function pago() {
        var precioenvio = 1500;
        var precioTops = 5000;
        var precioBottoms = 8000;
        var precioAW = 10000;
        pagototal.innerHTML = ' ';
        id = Number(proveedoresSlt.value - 1);
        var total = 0;
        var pagoNeto;

        if (datos[3][id] === 'Tops') {
            pagoNeto = precioTops * Number(datos[4][id]);
            total = precioenvio + pagoNeto;

        } else if (datos[3][id] === 'Bottoms') {
            pagoNeto = precioBottoms * Number(datos[4][id]);
            total = precioenvio + pagoNeto;

        } else {
            pagoNeto = precioAW * Number(datos[4][id]);
            total = precioenvio + pagoNeto;
        }
        datos[5][id] = total;
        pagototal.innerHTML = 'El monto a pagar de ' + datos[1][id] + ' ' + datos[2][id] + ' ' + 'es de ₡ ' + total;
    }




    function borrarfila(e) {
        if (!e.target.classList.contains("deleteBtn")) {
            return;
        }
        const btn = e.target;
        btn.closest("tr").remove();
    }


    function restablecer() {
        var id = Number(proveedoresSlt.value - 1);
        var cantPrendasTxt = 0;
        datos[4][id] = cantPrendasTxt;

        Swal.fire({
            icon: 'success',
            text: 'Los datos se han restablecido.',
        })

    }



    pagoBtn.onclick = function pagoBtn() {
        pago();
    }
    mayorProductorBtn.onclick = function mayorProductorBtnOnclick() {
        mayor();
    }

    menorBtn.onclick = function menorBtnOnclick() {
        menor();
    }

    totalPrendasBtn.onclick = function totalPrendasBtnOnclick() {
        totalPrendas();
    }
    restablecerBtn.onclick = function restablecerBtnOnClick() {
        restablecer();
        tablaProveedores();
    }

    totalTopsBtn.onclick = function totalTopsBtnOnclick() {
        totalTops();
    }

    totalBottomsBtn.onclick = function totalBottomsBtnOnclick() {
        totalBottoms();
    }

    totalAWBtn.onclick = function totalAWBtnOnclick() {
        totalAW();
    }

    tabla.addEventListener("click", borrarfila);

}