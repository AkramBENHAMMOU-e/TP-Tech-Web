let a =prompt("entrer le premier nombre : ")
let b =prompt("entrer le deuxieme nombre : ")
let c =prompt("entrer le troisieme nombre : ")

let tab = [a,b,c]
tab.sort()
for(let i=0;i<tab.length;i++){
    console.log(tab[i])
}