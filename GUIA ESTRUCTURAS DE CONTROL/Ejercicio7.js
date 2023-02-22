//funcion para hacer salto de linea
function saltarLinea (){
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}
//funcion para imprimir frase en el documento html
function imprimirFrase(frase){
    saltarLinea();
    document.write(frase);            
} 
//creacion del arreglo y declaro la variable suma de edades en cero para que poder hacer la suma dentro de la funcion
var edades = [20, 35, 18, 7, 9, 60];
var sumaEdades=0;
//creo la funcion media con el ciclo for para recorrer el arreglo y sumar los numeros
function media (){
    for (let i = 0; i < edades.length; i++) {
      sumaEdades = sumaEdades+edades[i];          
     }
    mediaEdades=sumaEdades/edades.length;
    imprimirFrase("suma total " + mediaEdades)
}
//instancio la funcion media
media();   