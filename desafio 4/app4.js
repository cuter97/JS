const array = [];

/*lo hice en una funcion por si queria preguntar de donde hasta donde quiero numeros random */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inicializar(dim,min,max){

    for (let i = 0; i < dim; i++) {
         array[i] = getRandomInt(min,max);   
        // console.log(`${array[i]}`);
    }
    // console.log(array.toString());
    
    /*elemento del vector con su indice al lado */
    array.forEach((elemento, indice) => console.log(`${elemento} --> ${indice}`)); 
    console.log(`\n`); 
}

function eliminar(pos){
    /* .splice es para eliminar elementos y le tenemos que pasar la posición del elemento que se elimina y el número de 
    elementos que queremos eliminar*/
    array.splice(pos, 1)

    console.log(array.toString());
    
    console.log(`\n`);
}

let dim;
let max = 10;
let min = 0;
let pos;

dim = Number(prompt("ingresar dimension del vector"));

inicializar(dim,min,max);

pos = Number(prompt("ingresar posicion del elemento a eliminar"));

eliminar(pos);