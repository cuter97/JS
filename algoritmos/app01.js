const cervezas = [{id: 1, producto: "IPA 1L", precio: 120},
                {id: 2, producto: "Amber Lager 1L", precio: 100},
                {id: 3, producto: "Red Ipa 1L", precio: 140},
                {id: 4, producto: "Pilsen 1L", precio: 90}]

console.log(cervezas)

 function calculo(num,cant) {
   
    let aux;
    if (aux = cervezas.find(cerveza => cerveza.id == num) ) {

        console.log(`cerveza: ${aux.producto}\n cantidad: ${cant}\n precio: ${aux.precio*cant}`);
        prompt(` cerveza: ${aux.producto}\n cantidad: ${cant}\n precio: ${aux.precio*cant}`);

     }
    else{
        console.log("NO EXISTE ESTA CERVEZA");
    }
         
 }


// //alert("eliga el numero y la cantidad de cervezas que desea comprar");
let numero = Number(prompt("ingrese numero de la cerveza a comprar"));
let cantidad = Number(prompt("ingrese la cantidad de botellas que desea"));
calculo(numero, cantidad);

// let let respuesta;
// while(respuesta )