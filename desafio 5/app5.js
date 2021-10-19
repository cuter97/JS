class Nodo {
    constructor(numero){
        this.numero = numero;
        this.sig = null;
    }
}

class cola{
    constructor(){
        this.primero = null;
        this.ultimo = null;
        this.length = 0;
    }

    push(numero){
        let nuevoNodo = new Nodo(numero);

        if (this.length === 0) {
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        }else{
            let anterior = this.primero;
            this.primero = nuevoNodo;
            nuevoNodo.sig = anterior;
        }
        this.length++;
    }

    imprimir(){
        let aux = this.primero;

        while (aux) {
            console.log(aux.numero);
            aux = aux.sig;
        }
    }
}

let nueva = new cola();
let num = 0;

alert("ingresar numeros naturales, para salir ingrese -1")

while (num !== -1 && num >= 0) {
    num = Number(prompt("ingrese un numero"));
    if (num != -1 && num >= 0) {
        nueva.push(num);
    }
}

nueva.imprimir();