class vector{
    constructor(){
        this.array = [];
    }

    agregar(elemento){
        this.array.push(elemento);
    }

    imprimir(){
        this.array.forEach(element => {
            console.log(element);    
        });
    }

    burbuja(){
        let length = this.array.length;  
        for (let i = 0; i < length; i++) { 
            for (let j = i + 1; j < length; j++) { 
                if(this.array[j] < this.array[i]) {
                    let aux = this.array[j]; 
                        this.array[j] = this.array[i]; 
                        this.array[i] = aux; 
                }
            }        
        }
    }
}


let nueva = new vector();
let num = 0;
while (num !== -1 && num >= 0) {
    num = Number(prompt("ingrese un numero posotivo"));
    if (num != -1 && num >= 0) {
        nueva.agregar(num);
    }
}
nueva.imprimir();
nueva.burbuja();
console.log(`\n`);
nueva.imprimir();