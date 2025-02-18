function prim(n) {
    if (n <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            console.log("Ce nombre n'est pas premier") 
        }
    }
    console.log("Ce nombre n'est pas premier") 
}

let p = prompt("entrer un nombre : ")
prim(p)