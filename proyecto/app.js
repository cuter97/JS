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

            let juntos = aux.producto + "  cantidad: " + cant;

             this.agregar(juntos, this.array);
             this.imprimir(this.array);

             aux = aux.precio*cant;
             this.agregar(aux, this.precios);

             let sumita = this.suma(this.precios);
             console.log(`total: ${sumita}$`);
             
        }
        else{
            console.log("NO EXISTE ESTA CERVEZA");
        }
    }

    suma(para){
        // this.precios.push(para);

        let resultado = 0;
        let length = para.length;

        for (let i = 0; i < length; i++) 
            resultado += para[i];
        
        return resultado;
    }

    agregar(elemento,ermao){
        ermao.push(elemento);
    }

    imprimir(vec){
        vec.forEach((element,index) => {
            console.log(`${element.toString()} --> articulo: ${index+1}`);
            // console.log(element.toString());    
        });
    }

    sacar(pos){
        this.array.splice(pos-1, 1);
        this.precios.splice(pos-1, 1);

        let sumita2 = this.suma(this.precios); 

        this.imprimir(this.array);
        console.log(`total: ${sumita2}$`);
    }

}


/*MAIN*/
let xd = new birra();

alert("VER DETALLES EN CONSOLA");
let numero = Number(prompt("ingrese numero de la cerveza a comprar"));
let cantidad = Number(prompt("ingrese la cantidad"));

xd.buscar(numero, cantidad);
console.log(`\n`);

let opcion,pos;
do {
    opcion = parseInt(prompt("opciones \n (1)->comprar otra birra \n (2)->eliminar producto del carrito \n (3)->terminar de comprar"));

    switch (opcion) {
        case 1:
             numero = Number(prompt("ingrese numero de la cerveza a comprar"));
             cantidad = Number(prompt("ingrese la cantidad de botellas que desea")); 
             xd.buscar(numero, cantidad); 

             console.log(`\n`);
            break;
        
        case 2:
            pos = Number(prompt("ingresar número del artículo a eliminar"));
            xd.sacar(pos);
            console.log(`\n`);
            
        default:
            break;
    }


} while (opcion > 0 && opcion < 3);