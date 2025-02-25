function getValues() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    return { a, b };
}

function add() {
    let { a, b } = getValues();
    document.getElementById("result").value = a + b;
}

function soustraction() {
    let { a, b } = getValues();
    document.getElementById("result").value = a - b;
}

function multiplication() {
    let { a, b } = getValues();
    document.getElementById("result").value = a * b;
}

function division() {
    let { a, b } = getValues();
    if (b === 0) {
        document.getElementById("result").value = "Erreur : division par zéro";
    } else {
        document.getElementById("result").value = a / b;
    }
}
