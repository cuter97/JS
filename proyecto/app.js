const cervezas = [{id: 1, producto: "IPA 1L", precio: 120},
                  {id: 2, producto: "Amber Lager 1L", precio: 100},
                  {id: 3, producto: "Red Ipa 1L", precio: 140},
                  {id: 4, producto: "Pilsen 1L", precio: 90}];
              

class birra{
    constructor(){
        this.precios = [];
        this.array = [];                
    }

    buscar(num, cant){
        let aux; 

        if (aux = cervezas.find(cerveza => cerveza.id == num)) {
             this.agregar(aux.producto, cant);
             this.imprimir(this.array);

             aux = aux.precio*cant;

             let sumita = this.suma(aux);
             console.log(`total: ${sumita}`);
        }
        else{
            console.log("NO EXISTE ESTA CERVEZA");
        }
    }

    suma(para){
        this.precios.push(para);

        let resultado = 0;
        let length = this.precios.length;

        for (let i = 0; i < length; i++) 
            resultado += this.precios[i];
        
        return resultado;
    }

    agregar(elemento, cant){
        this.array.push(elemento,cant);
    }

    imprimir(vec){
        vec.forEach((element) => {
            console.log(element.toString());    
        });
    }

}

/*MAIN*/

let xd = new birra();

let numero = Number(prompt("ingrese numero de la cerveza a comprar"));
let cantidad = Number(prompt("ingrese la cantidad"));

xd.buscar(numero, cantidad);
console.log(`\n`);

let opcion;
do {
    opcion = parseInt(prompt("opciones \n (1)->comprar otra birra \n (2)->terminar de comprar"));

    switch (opcion) {
        case 1:
             numero = Number(prompt("ingrese numero de la cerveza a comprar"));
             cantidad = Number(prompt("ingrese la cantidad")); 
             xd.buscar(numero, cantidad); 

             console.log(`\n`);
            break;
    
        default:
            break;
    }


} while (opcion > 0 && opcion < 2);


