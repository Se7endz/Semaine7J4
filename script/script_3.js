

// On demande à l'utilsateur de rentrer le nombre d'étages qu'il veut pour la fameuse pyramide Rioma
let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// On définit le nombre d'espaces avant la dièse. Sachant que le nombre d'espaces(spaces) diminuera de 1 contrairement
// au nombres d'étages(floor) qui augmentera de 1 , donc le nombre d'espace sur chaque ligne
// correspondera au nombre d'étages à chaque tour moins 1. (En francais lol, je crois...!!)
let spaces = floor - 1

//On crée une boucle for dans laquelle on initialise une variable qui correspondra au compteur (soit au nombre de tour) et on le fait commencer a 1
//On met en condition que le nombre de tour (nbr) ne peut pas depasser ou etre egal au nombre d'etage choisis par l'user
//On augmente la valeur du compteur (nombre de tour) de 1 à chaque boucle
for (nbr = 1; nbr <= floor; nbr++) {
// Sur Js, La méthode repeat() construit et renvoie une nouvelle chaine de caractères qui contient le nombre de copie demandée de la chaine 
//de caractères sur laquelle la méthode a été appelée, concaténées les unes aux autres.
	console.log(" ".repeat(spaces) + "#".repeat(nbr));
// On réduit le nombre d'espaces de 1 à chaque passage de boucle.
	spaces--
}
