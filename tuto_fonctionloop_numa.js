// On déclare 3 variables pour pouvoir tester notre fonction, et le tableau spécifiquement pour tester le "for" (loop)
let text1 = "Bonjour";
let text2 = "Aurevoir";
let tableau = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6"]; 

// Fonction:
function create_div(param) {
    newDiv = document.createElement("div");
    newDiv.textContent = param;
    return newDiv;
}

/* Ceci est une fonction qui créé un élément div (avec .createElement), et lui insère du texte (avec .textContent),
elle "return" (renvoie un résultat / donnée) à la fin. 
Le "param" n'existe pas, c'est une sorte de joker / alias, on l'utilise juste pour se préparer à traiter une variable ou un texte, c'est nécessaire.
Elle prend en paramètre (param) une variable (ou un texte directement avec " " voir 3ème exemple) */
document.write("<br>Exemples 1, 2 et 3 écrits avec la fonction : <br>");
// Exemples:
document.body.append(create_div(text1)); // Exemple 1 du fonctionnement de la fonction ci dessus, elle affichera donc text1, variable déclarée au dessus
document.body.append(create_div(text2)); // Exemple 2, donc idem pour text2, ça créé, et affiche Aurevoir
document.body.append(create_div("On peut aussi écrire directement dans le paramètre")) // Exemple 3, text direct, mais important de mettre " "


document.write("<br>Boucle sur le tableau simple : <br>");
// Boucle:
for (let i = 0; i < 6; i++) { // for in, for of, for each en alternative à regarder, penser à calculer automatiquement la length
    document.body.append(create_div(tableau[i]));
}

/* Ceci est une boucle qui va 6 fois faire appel à la fonction create_div au dessus (6 spécifié par le i < 6), 
Et faire passer 6 fois la fonction create_div en prenant les éléments du tableau "tab", elle part donc de 0 (vu que i commence à 0),
elle créé et écrit le mot avec la fonction.
Donc vu qu'un tableau commence à 0, elle créé et insère dans une div tab[0], le tout premier élément du tableau, qui correspond à "mot1"
Elle se répète donc 6 fois, "i" s'incrémentant automatiquement à chaque passage, elle va passer à l'élément 2 du tableau, donc tab[1] => "mot2"
jusqu'à ce qu'elle arrive à 6, puisqu'elle verra que i = 6, 6 n'étant pas plus petit que 6, elle s'arrête et sort de la boucle. 
Pour comprendre ça, il faut vraiment essayer de visualiser étape par étape ce qu'elle fait et pourquoi elle s'arrête 
En exemple concret, on peut imaginer ce genre de fonction et boucle pour afficher tout les étudiants de la formation sur une page,
basé sur un tableau contenant :    */

document.write("<br>Boucle sur le tableau qui liste les étudiants : <br>");
// Exemple plus concret d'un tableau affiché en loop:
let tab_etudiants = ["Numa", "Nabil", "Rudy", "Kheira", "Clara", "Romain", "Pierre", "Mohammed", "Romain2", "Stephane", "Sonia", "Loic", "Priscille", "Bryan", "Tiffany", "Khalil", "Straydine", "Nicolas", "Veronica", "Francisco", "Nawal", "Colin", "Thomas"];

for (i = 0; i < tab_etudiants.length; i++) {
    document.body.append(create_div("*" + tab_etudiants[i] + "*")); // Je rajoute des étoiles autour des prénoms
}
/* La différence ici */