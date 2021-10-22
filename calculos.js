
function calcularTotalPagar() {
    var descuento =0;
    var valorTicket = 0;
    var valorAPagar = 0;
    var cantidad = document.getElementById("quantity").value;
    var categoria = document.getElementById("category").value;

    if (categoria == 0) {
        descuento = 200 * 0.8;
        valorTicket = 200 - descuento;
        valorAPagar = cantidad * valorTicket;
    } else if (categoria == 1) {
        descuento = 200 * 0.5;
        valorTicket = 200 - descuento
        valorAPagar = cantidad * valorTicket;
    } else if (categoria == 2) {
        descuento = 200 * 0.15;
        valorTicket = 200 - descuento;
        valorAPagar = cantidad * valorTicket;
    }

    console.log (valorAPagar);
    document.getElementById("pay").innerHTML = "Total a Pagar: $ " + valorAPagar; 
}

function borrar() {
    document.getElementById("pay").innerHTML = "Total a Pagar: $ "
}

/*document.getElementById("resume").onclick = function () {
    calcularTotalPagar();*/

/*function resumen(){
    var valorEntrada = 200;
    var totalAPagar;
    var cantidad = document.getElementById('cantidad').value;
    var descuento = document.getElementById('categoria').value;
    if(descuento == 80){
        totalAPagar = (cantidad * valorEntrada) * 0.2;
    }
    else if(descuento == 50){
        totalAPagar = (cantidad * valorEntrada) * 0.5;
    }
    else if(descuento == 15){
        totalAPagar = (cantidad * valorEntrada) * 0.85;
    }
    console.log(totalAPagar);
    document.getElementById('totalCompra').innerHTML = "Total a Pagar: $ " + totalAPagar;
}
*/
