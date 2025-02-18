let s = prompt("donner la taille du motif")


//Q1
function triangle1(n){
    let i=1
    while(i<=n){
        console.log("*".repeat(i))
        i++

    }
}

//Q2
function triangle2(n){
    for(let i=0;i<n;i++){
        console.log("*".repeat(i+1))
    }
}

triangle2(s)

