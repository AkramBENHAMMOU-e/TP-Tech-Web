function prim(n) {
    for (let i = 2; i <= n-1; i++) {
        if (n % i === 0) {
            console.log("le nombre n'est pas premier")
        }
    }
    if(n<=1){
        console.log("le nombre n'est pas premier")
    }
    console.log("le nombre est premier")
}

while (true) {
let p = prompt("entrer un nombre : ")
prim(p)
}