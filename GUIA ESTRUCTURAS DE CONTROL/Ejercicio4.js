let mes = Number(prompt("Ingrese el mes del año (en numero)."))

if (mes == 12 || mes == 1 || mes ==2){
    alert("La estacion del año es: Invierno")
}else
    if (mes == 3 || mes == 4|| mes == 5){
        alert("La estacion del año es: Primavera")
    
}else{
    if ( mes == 6 || mes == 7 || mes == 8){
        alert("La estacion del año es: Verano") 
}else{
        if(mes == 9 || mes == 10 || mes == 11)
        alert("La estacion del año es: Otoño")
   
    }
}