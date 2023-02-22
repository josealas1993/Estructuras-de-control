// formas de pago 1.Efectivo, 2.Tarjeta de credito, 3.Vale.
function impresoras(cantidad, formadepago){ 
    if(formadepago === 1){
        let pago = cantidad * 70;
        let total = pago - (pago * 0.10);
        return "Lleva un total de " + cantidad + " impresoras,paga en efectivo, se aplica 10% de descuento, su total a pagar con descuentos es: "
        + total;
    }else if(formadepago === 2){
        let pago = cantidad * 70;
         let total = pago - (pago * 0.05);
        return "Lleva un total de " + cantidad + " impresoras,paga con tarjeta de credito, se aplica 5% de descuento, su total a pagar con descuentos es: "
        + total;
    }else if(formadepago === 3){
          let pago = cantidad * 70;
            let total = pago - (pago * 0.15);
            return "Lleva un total de " + cantidad + " impresoras,paga con vale, se aplica 15% de descuento, su total a pagar con descuentos es: "
            + total;
        }
    }
alert (impresoras(55, 3));

