let vehiculo1 = 1
let vehiculo2 = 2
let vehiculo3 = 3
let vehiculo4 = 4
let vehiculo5 = 5
let vehiculo6 = 6

let tipoVehiculo = Number(prompt("Ingrese el tipo de vehiculo: "))

switch(tipoVehiculo){
     case 1:
        tipo = 1
        alert("Tipo particular de vehiculo " + "pagara de impuesto: $0.70")
     break;

     case 2:
        tipo = 2
        alert("Tipo autobus " + "pagara de impuesto: $1.50")
     break;

     case 3:
        tipo = 3
        alert("Tipo microbus " + "pagara de impuesto: $1.25")
     break;

     case 4:
        tipo = 4
        alert("Tipo moto taxi " + "pagara de impuesto: $0.50")
     break;

     case 5:
        tipo = 5
        alert("Tipo moto " + "pagara de impuesto: $0.30")
     break;

     case 6:
        tipo = 6
        alert("Tipo otros " + "pagara de impuesto: $3.00")
     break;
 }
