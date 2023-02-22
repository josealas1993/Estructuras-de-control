let calificacion = Number(prompt("Ingrese una calificacion"))

if(calificacion <0 && calificacion>10){
    alert("La calificacion ingresada no es valida")
}else 
    if (calificacion >=0 &&  calificacion <=3){
        alert("La calificacion es insuficiente")
    }else
        if(calificacion >=4 && calificacion <= 6){
            alert("La calificacion es suficiente")
        }else  
            if(calificacion >=7 && calificacion <=9){
                alert("La calificacion es bien")
            }else 
                if(calificacion == 10){
                    alert("Su calificacion es excelente")
                }
               