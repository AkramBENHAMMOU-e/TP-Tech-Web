# Introduction à JavaScript - TD n°2

Ce rapport présente les différents exercices du TD n°2 sur les technologies du Web et le Web Sémantique, axé sur JavaScript et les événements.

## Table des matières
1. [Exercice 1: Permutation](#exercice-1-permutation)
2. [Exercice 2: Calculatrice Simple](#exercice-2-calculatrice-simple)
3. [Exercice 3: Calcul IMC](#exercice-3-calcul-imc)
4. [Exercice 4: Calculatrice Avancée](#exercice-4-calculatrice-avancée)

---

## Exercice 1: Permutation

### Objectif
Créer un formulaire avec deux zones de texte et un bouton qui, lorsqu'il est cliqué, permute le contenu des deux zones.

### Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function permuter() {
            let inp1 = document.getElementById("input1");
            let inp2 = document.getElementById("input2");
            let t = inp1.value;
            inp1.value = inp2.value;
            inp2.value = t;
        }
    </script>
</head>
<body>
    <div style = "margin: 10px;">
        <input type="text" id="input1" >
    </div>
    
    <div style = "margin: 10px;">
        <input type="text" id="input2">
    </div>
    
    <div style = "margin: 10px;">
        <button onclick="permuter()">Permuter</button>
    </div>
    
</body>
</html>
```

### Explication
- La fonction `permuter()` est appelée lorsque le bouton est cliqué.
- La fonction récupère les deux champs d'entrée à l'aide de `getElementById`.
- Une variable temporaire `t` est utilisée pour stocker la valeur du premier champ.
- Les valeurs sont ensuite échangées entre les deux champs.

---

## Exercice 2: Calculatrice Simple

### Objectif
Créer une calculatrice basique permettant d'effectuer les quatre opérations fondamentales (addition, soustraction, multiplication et division) entre deux nombres.

### Solution

#### HTML (EX2.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="EX2.js"></script>
</head>
<body>
    <div style = "margin: 10px;">
        <input type="text" id="a" >
    </div>
    
    <div style = "margin: 10px;">
        <input type="text" id="b">
    </div>
    
    <div style = "margin: 10px;">
        <button onclick="add()">+</button>
        <button onclick="soustraction()">-</button>
        <button onclick="multiplication()">*</button>
        <button onclick="division()">/</button>
    </div>
    <div>
        <input type="text" id="result" value="0" readonly>
    </div>
    
</body>
</html>
```

#### JavaScript (EX2.js)
```javascript
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
```

### Explication
- L'interface comporte deux champs de saisie, quatre boutons d'opération et un champ de résultat en lecture seule.
- La fonction `getValues()` mutualise la récupération et la conversion des valeurs en nombres à virgule flottante.
- Chaque fonction d'opération (`add()`, `soustraction()`, `multiplication()`, `division()`) utilise `getValues()` et affiche le résultat.
- La fonction `division()` inclut une vérification pour éviter la division par zéro.

---

## Exercice 3: Calcul IMC

### Objectif
Développer un calculateur d'Indice de Masse Corporelle (IMC) qui prend en compte le poids et la taille d'une personne.

### Solution
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        function IMC() {
            let p = parseFloat(document.getElementById("p").value);
            let t = parseFloat(document.getElementById("t").value);
            let imc = p / (t * t);
            document.getElementById("resultat").innerText = "Votre IMC est : " + imc;
        }
    </script>
</head>
<body>
    <div style="margin: 10px;">
        <label>poids (kg) : <input type="number" id="p"></label>
    </div>
    <div style="margin: 10px;">
        <label>taille (m) : <input type="number" id="t"></label>
    </div>
    <div style="margin: 10px;">
        <button style="background-color: blue; border-radius: 5px;" onclick="IMC()">Calculer IMC</button>
    </div>
    <div>
        <p id="resultat"></p>
    </div>    
</body>
</html>
```

### Explication
- L'application comporte deux champs numériques pour le poids (en kg) et la taille (en m).
- La fonction `IMC()` calcule l'IMC selon la formule `poids / (taille * taille)`.
- Le résultat est affiché dans un paragraphe.
- **Amélioration possible**: Ajouter l'interprétation de l'IMC (ex: poids normal, surpoids, etc.).

---

## Exercice 4: Calculatrice Avancée

### Objectif
Développer une calculatrice scientifique utilisant JavaScript pur pour les calculs et CSS Grid pour la mise en page.

### Solution

#### HTML et JavaScript intégré
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculatrice Scientifique</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
        }

        .calculator {
            width: 400px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
        }

        .display {
            width: 100%;
            height: 70px;
            margin-bottom: 20px;
            padding: 15px;
            font-size: 28px;
            text-align: right;
            border: 2px solid #ddd;
            border-radius: 5px;
            background-color: #f9f9f9;
            box-sizing: border-box;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 8px;
        }

        button {
            height: 55px;
            padding: 10px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.2s;
        }

        /* Styles spécifiques aux types de boutons */
        .number {
            background-color: #e0e0e0;
            color: #333;
        }

        .operator {
            background-color: #ff9500;
            color: white;
        }

        .function {
            background-color: #4a4a4a;
            color: white;
        }

        .equals {
            background-color: #007AFF;
            color: white;
            grid-column: span 2;
        }

        .clear {
            background-color: #ff3b30;
            color: white;
        }

        .scientific {
            background-color: #5c5c5c;
            color: white;
        }

        button:hover {
            filter: brightness(0.9);
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" disabled>
        <div class="buttons">
            <!-- Première ligne - Fonctions scientifiques -->
            <button class="scientific" onclick="calculate('sqrt')">&radic;</button>
            <button class="scientific" onclick="calculate('x2')">x²</button>
            <button class="scientific" onclick="calculate('pow')">x^y</button>
            <button class="scientific" onclick="calculate('exp')">EXP</button>
            <button class="scientific" onclick="calculate('Inv')">1/x</button>

            <!-- Deuxième ligne - Fonctions trigonométriques -->
            <button class="scientific" onclick="calculate('sin')">sin</button>
            <button class="scientific" onclick="calculate('cos')">cos</button>
            <button class="scientific" onclick="calculate('tan')">tan</button>
            <button class="scientific" onclick="calculate('e')">e</button>
            <button class="scientific" onclick="calculate('%')">%</button>

            <!-- Troisième ligne - Nombres et opérations de base -->
            <button class="clear" onclick="clearDisplay()">CE</button>
            <button class="function" onclick="calculate('log')">log</button>
            <button class="function" onclick="calculate('ln')">ln</button>
            <button class="operator" onclick="appendToDisplay('/')">&divide;</button>
            <button class="operator" onclick="appendToDisplay('*')">&times;</button>
            <button class="number" onclick="appendToDisplay('7')">7</button>
            <button class="number" onclick="appendToDisplay('8')">8</button>
            <button class="number" onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            <button class="operator" rowspan="2" onclick="appendToDisplay('+')">+</button>
            <button class="number" onclick="appendToDisplay('4')">4</button>
            <button class="number" onclick="appendToDisplay('5')">5</button>
            <button class="number" onclick="appendToDisplay('6')">6</button> 
            <button class="number" onclick="appendToDisplay('1')">1</button>
            <button class="number" onclick="appendToDisplay('2')">2</button>
            <button class="number" onclick="appendToDisplay('3')">3</button>
            <button class="equals" onclick="calculateResult()">=</button>
            <button class="number" onclick="appendToDisplay('0')" style="grid-column: span 2;">0</button>
            <button class="number" onclick="appendToDisplay('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');
        let isNewCalculation = true;
        
        function appendToDisplay(value) {
            if (isNewCalculation) {
                display.value = '';
                isNewCalculation = false;
            }
            display.value += value;
        }
        
        function clearDisplay() {
            display.value = '';
        }
        
        function calculateResult() {
            try {
                display.value = eval(display.value);
                isNewCalculation = true;
            } catch (error) {
                display.value = 'Erreur';
                isNewCalculation = true;
            }
        }
        
        function calculate(operation) {
            let currentValue = parseFloat(display.value);
            
            switch(operation) {
                case 'sin':
                    display.value = Math.sin(currentValue * (Math.PI / 180));
                    break;
                case 'cos':
                    display.value = Math.cos(currentValue * (Math.PI / 180));
                    break;
                case 'tan':
                    display.value = Math.tan(currentValue * (Math.PI / 180));
                    break;
                case 'Inv':
                    display.value = 1 / currentValue;
                    break;
                case 'ln':
                    display.value = Math.log(currentValue);
                    break;
                case 'log':
                    display.value = Math.log10(currentValue);
                    break;
                case 'sqrt':
                    display.value = Math.sqrt(currentValue);
                    break;
                case 'x2':
                    display.value = Math.pow(currentValue, 2);
                    break;
                case 'pow':
                    isNewCalculation = false;
                    appendToDisplay('^');
                    break;
                case 'exp':
                    display.value = Math.exp(currentValue);
                    break;
                case 'e':
                    display.value = Math.E;
                    break;
                case '%':
                    display.value = currentValue / 100;
                    break;
            }
            
            isNewCalculation = true;
        }
        
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                calculateResult();
            }
        });
        
        
        const originalEval = window.eval;
        window.eval = function(str) {
            str = str.replace(/\^/g, '**');
            return originalEval(str);
        };
    </script>
</body>
</html>
```

#### CSS séparé (EX4.css)
```css
:root {
    --button-bg: #f0f0f0;
    --button-hover: #ddd;
    --operator-bg: #ff9500;
    --operator-hover: #db8100;
}

.calculator {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    max-width: 320px;
    margin: 2rem auto;
    padding: 20px;
    background: #f8f8f8;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.display {
    grid-column: 1 / -1;
    height: 60px;
    padding: 10px;
    font-size: 24px;
    text-align: right;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: white;
    margin-bottom: 10px;
}

.btn {
    padding: 15px;
    font-size: 18px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-number {
    background: var(--button-bg);
}

.btn-operator {
    background: var(--operator-bg);
    color: white;
}

.btn-clear {
    background: #ff3b30;
    color: white;
}

.btn:hover {
    filter: brightness(0.95);
}

.btn-operator:hover {
    background: var(--operator-hover);
}
```

### Explication
- La calculatrice scientifique utilise CSS Grid pour structurer l'interface.
- Les fonctionnalités incluent:
  - Opérations arithmétiques de base (+, -, *, /)
  - Fonctions trigonométriques (sin, cos, tan)
  - Fonctions logarithmiques (log, ln)
  - Autres opérations mathématiques (racine carrée, puissances, pourcentage, inverse)
  - Constante mathématique (e)
- La gestion des erreurs est intégrée avec un bloc try-catch dans la fonction `calculateResult()`.
- L'utilisation de `eval()` est modifiée pour gérer l'opérateur d'exponentiation (^).
- La calculatrice répond également aux touches du clavier (la touche Entrée pour calculer).

## Conclusion

Ces exercices fournissent une introduction pratique aux concepts JavaScript de base, en particulier à la manipulation du DOM et à la gestion des événements. Les exercices progressent en complexité:
1. **Permutation**: manipulation simple des valeurs d'entrée.
2. **Calculatrice Simple**: fonctions basiques et gestion d'erreurs simples.
3. **Calcul IMC**: application d'une formule mathématique spécifique.
4. **Calculatrice Avancée**: interface utilisateur complexe avec CSS Grid et fonctionnalités mathématiques avancées.

Ces exercices démontrent l'application pratique de JavaScript pour créer des interfaces interactives et effectuer des calculs côté client.
