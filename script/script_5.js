// EXERICE 5

// L'array de base :
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }

];

// Numero 1 : 

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
// On crée une variable vide
let bookRent; 

// On parcourt le tableau avec forEach, 
// Pour chaque livre on vérifie s'il a été emprunté
// Si au moins un livre n'a pas été emprunté, notre variable bookRent
// devient false, sinon elle vaut true
books.forEach(book => {
if (book.rented === 0){
  bookRent = false;
}else {
  bookRent = true
}
});

// On vérifie si tous les livres ont bien été empruntés au moins une fois
// grâce à la variable bookRent et on affiche le résultat dans la console
if (bookRent === true) {
  console.log("Oui");
} else {
  console.log("Non");
};



// Numero 2 : Le livre le plus emprunté? 

console.log("Quel est livre le plus emprunté ?")
// On crée un nouvel array dans lequel les livres sont triés en fonction de leur location (rented)
// La methode sort permet de classer les elements d un array dans l ordre alphabetique.
// Dans la doc JS on voit que l'on peut une fonction qui compare les propriétés deux par deux (a et b) et change l'ordre dans l'array.
let booksRented = books.sort(function (a, b) {
  return a.rented - b.rented;
});

// On affiche le titre du dernier objet de l'array 
console.log(booksRented[booksRented.length - 1].title)

// Numero 3 : Le livre le moins empruntés?

console.log("Quel est livre le moins emprunté ?")

// On affiche le titre du premier objet de l'array
console.log(booksRented[0].title)



// Numero 3 : Quel est le livre appartenant à l'ID: 873495 -----

console.log("Quel est livre avec l'ID: 873495 ?")

// On récupère l'objet dont l'id est 873495 dans une nouvelle variable (bookId)
// grâce à .find()
let bookId = books.find(book => {
 return book.id === 873495
})

console.log(bookId.title)


// Numero 4 : Supprime le livre avec l'ID: 133712 

console.log("Supprime le livre avec l'ID: 133712")

// On récupère l'index de l'objet dont l'id est 133712 dans une nouvelle variable (bookDelete)

let bookDelete = books.findIndex(book => {
  return book.id === 133712 
})

// On supprime l'objet de l'array books avec splice() et pas avec delete pour mettre à jour les index
books.splice(bookDelete, 1)
console.log(books)



// ----- Trie les livres par ordre alphabétique. -----
console.log("Trie les livres par ordre alphabétique")
// On crée un nouvel array dans lequel les livres sont triés par ordre alphabétique
// en passant une fonction à sort La méthode localeCompare() renvoie un nombre indiquant 
//si la chaîne de caractères courante se situe avant, après ou est la même que la chaîne passée en paramètre, 
//selon l'ordre lexicographique.
let booksByAlphabeticalOrder = books.sort(function (a, b) {
 return a.title.localeCompare(b.title);
});

console.log(booksByAlphabeticalOrder)
