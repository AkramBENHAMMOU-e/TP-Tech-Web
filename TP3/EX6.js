function fibo1(n){
    if(n==0){
        return 0
    }
    else if(n==1){
        return 1
    }
    else
        return (fibo1(n-1)+fibo1(n-2))

    
}

let m = prompt("entrer un nombre : ")
console.log(fibo1(m))