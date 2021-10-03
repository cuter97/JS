let num1 = Number(prompt("ingrese numero entre 0 y 10"));
let num2 = Number(prompt("ingrese numero entre 20 y 30"));

if ((num1 >= 0 && num1 <= 10)) {

    if ((num2 >= 20 && num2 <= 30)) {

        num3 = num1 + num2;
        console.log("la suma de los dos numeros es " + num3);

        if (num3 > 35) {
            console.log("por lo que esa suma es mayor a 35");
        }
        else
            console.log("por lo que la suma es menor a 35");

    }
    else
        alert("el segundo numero ingresado no esta entre 20 y 30");
}
else
    alert("el primer numero ingresado no esta entre 0 y 10");



