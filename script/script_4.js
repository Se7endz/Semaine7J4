// EXERICE 4

// L'array de base :
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Numéro 1 : Ceux né dans les années 70

console.log("Liste des entrepreneurs nés dans les années 70: ")

// Grace a la méthode .forEach(), on parcourt le tableau et on affiche les entrepreneurs ayant
// une date de naissance comprise entre 1970 et 1980.
entrepreneurs.forEach(entrepreneursContent => {
  // le .year appel l'année correspondante de chaque entrée de l'array.
  // Si le contenu de year est sup ou egale 1970 et strictement inférieur a 1980
	if(entrepreneursContent.year >= 1970 && entrepreneursContent.year < 1980)
    // tu m'affiche son prénom (.first) et son nom (.last)
		console.log(`- ${entrepreneursContent.first} ${entrepreneursContent.last}`);
});


// Numéro 2 : afficher les noms et prenoms dans un array

console.log("On va afficher tous les noms et prenoms dans un array")
// On crée un array vide dans le lequel on stockera tous les noms et prenoms des entrepreneurs
entrepreneursName = [];

// Pour chaque entrepreneur, on stocke son nom et son prénom dans une même entrée de l'array.
entrepreneurs.forEach(entrepreneur => {
	entrepreneursName.push(`${entrepreneur.first} ${entrepreneur.last}`);
});

console.log("Voici l'array contenant tous les noms et prenoms des entrepreneurs")
console.log(entrepreneursName)


// Numero 3 : Quel serait leurs age aujourd'hui???

console.log("Voici l'age que les entrepreneurs auraient aujourd'hui")

// Pour obtenir l'age de quelqu'un et que l'on dispose de son année de naissance.
// on prends l'année en cours à laquelle on soustrait la date de naissance de la personne.
entrepreneurs.forEach(entrepreneur => {
	let age = 2019 - entrepreneur.year;
	console.log(`--> ${entrepreneur.first} ${entrepreneur.last} aurait ${age} ans aujourd'hui.`);
});


// Trier les entrepreneurs par ordre alphabetique de leurs noms de famille

console.log("Voici le classement par ordre alphabetique du nom de famille :")

// On crée un premier array pour stocker les noms des entrepreneurs
entrepreneursLastName = [];

// On ajoute tous les entrepreneurs en mettant leur nom de famille en premier
// sous la forme (last + first)
entrepreneurs.forEach(entrepreneur => {
	entrepreneursLastName.push(`${entrepreneur.last} ${entrepreneur.first}`);
});

// The .sort() method sorts an array alphabetically:
// de liste dans la console.
console.log(`- ${entrepreneursLastName.sort()}`);







