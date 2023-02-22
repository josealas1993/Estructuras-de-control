var frutas = ["manzana","banana","fresa"]

//agregando 3 frutas a un arreglo llamado frutas = []

frutas = frutas.concat("pera")
frutas = frutas.concat("mora")
frutas = frutas.concat("uva")
console.log(frutas)

//luego eliminamos el valor banana

frutas.splice(1,1)
console.log(frutas)
