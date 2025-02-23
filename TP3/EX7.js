function Raca1(A) {
    if (A <= 0) {
        console.log("Le nombre doit être positif.");
        return;
    }
    let u = A / 2;
    const epsilon = 1e-5;
    while (Math.abs(u * u - A) >= epsilon) {
        u = 0.5 * (u + A / u);
    }
    console.log(`Valeur approchée de la racine carrée = ${u}`);
}

let A = prompt("Entrer un nombre A entre 1 et 100: ");
Raca1(A);
