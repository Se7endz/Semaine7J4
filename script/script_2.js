// Calcul de factorielle

// Que l'utilisateur choisisse un nombre
let nbr = prompt("De quel nombre voulez-vous calculer la factorielle ?");

// On creer une variable de base qui correspondra au resultat. Cette variable est fixé a 1, car on
// multiplie pas par 0 dans une opération de factorielle!
let resultat = 1

// A chaque passage de boucle, on multiplie la variable correspondante au resultat par le compteur en cours et
// on actualise sa valeur. A chaque tour de boucle on rajoute 1 au compteur.
for(let counter = 1; counter <= nbr; counter++ ) {
	resultat *= counter;
}

// On affiche le résultat dans la console.
console.log(`Le resultat de la factorielle de ${nbr} est : ${resultat}.`)