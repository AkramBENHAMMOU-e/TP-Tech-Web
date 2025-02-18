let s = prompt("entrer la taille du pyramide ")

function pyramide(n){
    for(let i=0;i<n;i++){
        console.log(" ".repeat(n-i)+"*".repeat(2*i+1))
    }
}

pyramide(s)