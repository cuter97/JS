 let max;
 let min;
 let numero = 0;
 let total = 0;
 let contador = 0;

alert("ingresar numeros enteros, si desea salir escriba -1");

 while(numero != -1){

     numero = Number(prompt("ingrese un numero"));
    
     if (contador == 0 && numero != -1) {
        
         min = numero;
         max = numero;
        
     } else {
        
         if (numero < min && numero != -1) 
             min = numero;
        
         if (numero > max) 
             max = numero;
        
     }
     if (numero != -1) {
         contador++;
         total += numero;
         promedio = total / contador;
     }
 }
 console.log(`\n maximo: ${max} \n minimo: ${min} \n numero leidos: ${contador} \n promedio: ${promedio} \n total: ${total}`);
