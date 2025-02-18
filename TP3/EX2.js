function hjms(seconds) {
    let sec = seconds % 60; 
    let min = Math.floor((seconds / 60) % 60);  
    let h = Math.floor((seconds / 3600) % 24);  
    let j = Math.floor(seconds / 86400);  
    console.log("Cette durée équivaut à " + j + " jours " + h + " heures " + min + " minutes " + sec + " secondes");
}

while(true){
    let secc = prompt("entrer le nombre de scondes : ")
    hjms(secc)
}



