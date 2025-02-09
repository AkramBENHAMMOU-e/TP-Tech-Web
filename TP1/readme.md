# TP1 - Technologie Web

## Description du Projet
Ce projet consiste en la création d'un site web éducatif sur l'alimentation et les repas quotidiens. Le site est structuré en utilisant des tableaux HTML pour la mise en page, optimisé pour une résolution de 800x600 pixels.

## Structure du Site
- **Largeur totale**: 740 pixels
- **Résolution cible**: 800x600 pixels
- **Nombre de pages**: 4 pages principales + 1 gabarit

### Pages du Site
1. **index.html** : Page d'accueil
   - Informations générales sur le nombre de repas quotidiens
   - Conseils sur la répartition des repas
   ![gabari](TP1/img/Screenshot 2025-02-09 202347.png)
2. **petit-dejeuner.html** : Page sur le petit déjeuner
   - Importance du petit déjeuner
   - Composition recommandée
   - Conseils pratiques
  ![gabari](TP1/img/Screenshot 2025-02-09 202423.png)
3. **dejeuner.html** : Page sur le déjeuner
   - Différentes situations de déjeuner
   - Conseils pour manger à l'extérieur
   - Solutions rapides et équilibrées
   ![gabari](C:\Users\HP\OneDrive\Bureau\tech_web\TP1\img\Screenshot 2025-02-09 202225.png)
4. **diner.html** : Page sur le dîner
   - Recommandations pour le repas du soir
   - Idées de repas simples
   - Conseils pour les sorties au restaurant
   ![gabari](TP1/img/Screenshot 2025-02-09 202545.png)
5. **gabarit.html** : Template de base
   - Structure commune à toutes les pages
   - Éléments de navigation
   - Layout principal
    ![gabari](TP1/img/Screenshot 2025-02-09 202225.png)


## Structure Technique

### Layout
- Table principale : 740px de large
- Menu gauche : 200px
- Zone de contenu : 540px
- Bordures visibles sur les tableaux
- Pied de page fixé en bas

### Éléments Communs
- Logo en en-tête
- Barre de navigation supérieure (Contact | Accueil)
- Bannière
- Menu de navigation latéral
- Pied de page

### CSS Intégré
```css
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

## Installation et Utilisation

1. Cloner le repository
2. Vérifier la présence des images :
   - logo.jpg
3. Ouvrir index.html dans un navigateur

## Fichiers Requis

### Images
- logo.jpg

### Pages HTML
- gabarit.html
- index.html
- petit-dejeuner.html
- dejeuner.html
- diner.html

## Points Techniques Importants

### Compatibilité
- Optimisé pour résolution 800x600
- Testé sur navigateurs modernes
- Structure en tableaux pour la mise en page

### Accessibilité
- Images avec attributs alt
- Structure de navigation cohérente
- Contenus bien structurés avec titres hiérarchiques

## Maintenance

Pour modifier le site :
1. Utiliser gabarit.html comme base pour nouvelles pages
2. Conserver la structure des tableaux
3. Maintenir la cohérence des styles CSS
4. Vérifier les liens de navigation

## Dépendances
- Aucune dépendance externe
- Site statique en HTML/CSS pur

## Notes Importantes
- Les styles CSS sont inclus dans chaque page
- Le menu de navigation est identique sur toutes les pages
- La structure en tableaux doit être maintenue pour la cohérence visuelle