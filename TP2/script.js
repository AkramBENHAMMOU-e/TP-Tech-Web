// Sélectionner tous les liens dans la barre latérale
document.querySelectorAll('.barre-laterale ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut du lien

        // Cacher tous les contenus
        document.querySelectorAll('.contenu').forEach(contenu => {
            contenu.classList.remove('actif');
            contenu.classList.add('cache');
        });

        // Afficher le contenu correspondant
        const target = document.getElementById(this.dataset.target);
        if (target) {
            target.classList.remove('cache');
            target.classList.add('actif');
        }
    });
});