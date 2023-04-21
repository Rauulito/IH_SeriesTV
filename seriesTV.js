let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];
// Agregamos un nuevo elemento al array
seriesPending.push('The IT Crowd');

//Recorremos el array con un for
for (let i = 0; i < seriesPending.length; i++) {
    console.log(`Serie #${i}: ${seriesPending[i]}`);
    if (seriesPending[i] === "Boolean 99") {
    console.log("Found It!");
    }
}
//Inicializamos una variable con un array vacia
let seriesWatching = [];

//Eliminamos el primer elemento del primer array creado y lo añadimos al final del array seriesWatching.
seriesWatching.push(seriesPending.shift());
//Vemos si se ha hecho el cambio
console.log(seriesWatching)
console.log(seriesPending)

//Vemos la longitud de las arrays
console.log(" Longitud del array de seriesPending es: " + seriesPending.length);
console.log("Longitud del array de seriesWatching es: " + seriesWatching.length);

//Cambimos los elementos del primer array moviendolos al array seriesWatching
for (let i = 0; i < 4; i++) {
    seriesWatching.push(seriesPending.shift());
}
//Comprobamos el cambio viendo la longitud de los arrays
console.log("Longitud del array de seriesPending ahora es: " + seriesPending.length);
console.log("Longitud del array de seriesWatching ahora es: " + seriesWatching.length);

//Ekiminamos los elmentos del array seriesWatching
seriesWatching.splice(0, seriesWatching.length);

//Comprobamos el cambio viendo la longitud de los arrays
console.log("Longitud del array de seriesPending ahora es: " + seriesPending.length);
console.log("Longitud del array de seriesWatching ahora es: " + seriesWatching.length);

