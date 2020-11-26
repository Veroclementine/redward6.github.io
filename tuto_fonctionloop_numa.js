// On déclare 3 variables pour pouvoir tester notre fonction, et le tableau spécifiquement pour tester le "for" (loop)
let text1 = "Bonjour";
let text2 = "Aurevoir";
let tableau = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6"]; /* déclaration et remplissage d'un tableau, attention à la syntaxe c'est important :
Un tableau c'est une suite de données, la elles sont toutes des "strings" (chaînes de caractère), mais on peut tout aussi bien y mettre des nombres, ou un mélange de variables */

// Fonction:
function create_div(param) { // fonction créée par moi, donc "create_div" et "param" pourrait tout aussi bien être "chapi" et "chapo", aucune importance, ce ne sont que des noms pour pouvoir les réutiliser par la suite
    let newDiv = document.createElement("div"); // je créé une variable newDiv, en tant que "div" avec .createElement
    newDiv.textContent = param; // je remplis cette div avec .textContent, basé sur le paramètre envoyé dans les parenthèses ligne 7 (param), donc une variable (exemple ligne 21 et 22) ou du texte (ligne 23)
    return newDiv; // je retourne / envoie cette div pour pouvoir l'extraire de ma fonction une fois que celle ci a terminé son travail, sans ça on n'y aurait pas accès
}

/* Ceci est une fonction qui créé un élément div (avec .createElement), et lui insère du texte (avec .textContent),
elle "return" (renvoie un résultat / donnée) à la fin. 
Le "param" n'existe pas, c'est une sorte de joker / alias, on l'utilise juste pour se préparer à traiter une variable ou un texte, c'est nécessaire.
Elle prend en paramètre (param) une variable (ou un texte directement avec " " voir 3ème exemple) */
document.write("<br>Exemples 1, 2 et 3 écrits avec la fonction : <br>"); // simple ligne de texte pour différencer les parties de l'affichage

// Exemples:
document.body.append(create_div(text1)); // Exemple 1 du fonctionnement de la fonction ci dessus, elle affichera donc text1 (Bonjour), variable déclarée au dessus
document.body.append(create_div(text2)); // Exemple 2, donc idem pour text2, ça créé, et affiche Aurevoir
document.body.append(create_div("On peut aussi écrire directement dans le paramètre")) // Exemple 3, texte direct, mais important de mettre " "


document.write("<br>Boucle sur le tableau simple : <br>");  // simple ligne de texte pour différencer les parties de l'affichage
// Boucle:
for (let i = 0; i < 6; i++) { // je créé une variable nommé "i" pour index (convention très courante dans la programmation), qui va me servir de compteur, fonctionnement expliqué plus bas
    document.body.append(create_div(tableau[i]));
}

/* Ceci est une boucle qui va 6 fois faire appel à la fonction create_div au dessus (6 spécifié par le i < 6, 0+1+2+3+4+5 et elle s'arrête, puisque 5 < 6 et fin de la boucle), 
et faire passer 6 fois la fonction create_div en prenant les éléments du tableau "tab", elle part donc de 0 (vu que i commence à 0),
elle créé et écrit le mot avec la fonction.
Donc vu qu'un tableau commence à 0, elle créé et insère dans une div tab[0] (c'est ça que veut dire tab[i] au premier tour de boucle), le tout premier élément du tableau, 
qui correspond à "mot1". Elle se répète donc 6 fois, "i" s'incrémentant automatiquement à chaque passage (avec le i++), elle va passer à l'élément 2 du tableau, donc tab[1] => "mot2"
jusqu'à ce qu'elle arrive à 6, puisqu'elle verra que i = 6, 6 n'étant pas plus petit que 6, elle s'arrête et sort de la boucle. 
Pour comprendre ça, il faut vraiment essayer de visualiser étape par étape ce qu'elle fait et pourquoi elle s'arrête .

En exemple concret, on peut imaginer ce genre de fonction et boucle pour afficher tout les étudiants de la formation sur une page, basé sur un tableau contenant la liste de nos prénoms:    */

document.write("<br>Boucle sur le tableau qui liste les étudiants : <br>"); // simple ligne de texte pour différencer les parties de l'affichage
// Exemple plus concret d'un tableau affiché en loop:
let tab_etudiants = ["Numa", "Nabil", "Rudy", "Kheira", "Clara", "Romain", "Pierre", "Mohammed", "Romain2", "Stephane", "Sonia", "Loic", "Priscille", "Bryan", "Tiffany", "Khalil", "Straydine", "Nicolas", "Veronica", "Francisco", "Nawal", "Colin", "Thomas"];

for (i = 0; i < tab_etudiants.length; i++) {
    document.body.append(create_div("*_* " + tab_etudiants[i] + " \\o/")); // Je rajoute des trucs autour des prénoms pour vous montrer la syntaxe possible, notez les " " et les +
}
/* La différence ici avec la boucle "plus simple" précédente (les mots), c'est que je détermine automatiquement la longueur du tableau, et donc le nombre de fois ou ma boucle s'effectura,
en utilisant la formure "NomDuTableau.length", donc ici, le nom de la variable tableau est : tab_etudiants auquel on rajoute .length, ce qui en javascript indiquera a la boucle
combien de fois tourner (toujours en utilisant un i qui part de 0 pour compter) avant de s'arrêter. On a besoin de spécifier à une boucle le nombre de tours qu'elle a besoin de faire,
sinon elle risque de tourner à l'infini, et ça ça serait quand même un beau gachis d'énergie (et ça pourrait faire tout planter, je sais pas j'ai pas essayé :D ) */