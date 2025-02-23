function Fibo2(n) {
    let a = 0, b = 1, temp, i = 1;

    while (b <= n) {
        temp = a + b;
        a = b;
        b = temp;
        i++;
    }

    console.log(`Le premier terme de la suite de Fibonacci supérieur à ${n} est ${b}, au rang ${i}.`);
}

let n = prompt("Entrer un nombre : "); 
Fibo2(n);
