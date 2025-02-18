function hjms(seconds) {
    let sec = seconds % 60;  
    let min = Math.floor((seconds / 60) % 60);  
    let h = Math.floor((seconds / 3600) % 24); 
    let j = Math.floor(seconds / 86400);  
    
    let result = []; 

    if (j > 0) {
        result.push(j + " jour" + (j > 1 ? "s" : ""));  
    }
    if (h > 0) {
        result.push(h + " heure" + (h > 1 ? "s" : ""));  
    }
    if (min > 0) {
        result.push(min + " minute" + (min > 1 ? "s" : "")); 
    }
    if (sec > 0) {
        result.push(sec + " seconde" + (sec > 1 ? "s" : ""));  
    }


    console.log("Cette durée équivaut à " + result.join(" "));
}

while(true){
    let ss = prompt("entrer le nombre de secondes :")
    hjms(ss)
}