// Exercice : Calculer la somme de tous les nombres de 1 à 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("La somme est :", sum);

// Affiche le résultat dans la page
document.getElementById("output").textContent = "La somme est : " + sum;

// ***************************
// Créez une fonction qui prend une chaîne de caractères en paramètre
//  et retourne sa longueur après avoir supprimé tous les espaces.
// Case d'usage possible: Validation de la longueur d'un tweet ou d'un message SMS Entrée
//  : "Bonjour le monde !" Sortie attendue : 16 caractères
const calculLetter = (word) => {
  // Supprimer uniquement les espaces
  let oneWord = word.replace(/\s/g, "");
  let number = oneWord.length;
  console.log(number, "caractere");
};
calculLetter("Bonjour le monde !");

//2 Développez une fonction qui accepte un prénom en paramètre
// et renvoie une salutation personnalisée en mettant la première lettre en majuscule.
// Cas d'usage: Système de messagerie automatique ou e-mailing Entrée
// : "jean-pierre" Sortie attendue : "Bonjour Jean-Pierre"

const helloUser = (mot) => {
  let phrase = "Bonjour";
  let majuscule = mot.charAt(0).toUpperCase() + mot.slice(1);
  phrase += majuscule;
  return phrase;
};
console.log(helloUser("herve"));
// ***************
const finishPoint = () => {
  let phrase = "je suis aller a la boulangerie ";
  let derniereLettre = phrase.slice(-1);
  if (derniereLettre === "!") {
    return true;
  } else {
    return false;
  }
};
console.log(finishPoint());
// *****************
function countOccurrences(str, letter) {
  return str.split("").filter((char) => char === letter).length;
}

const text = "je verifie une chose importante";
const letter = "o";
console.log(countOccurrences(text, letter));
