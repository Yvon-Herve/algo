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

const calculLetter = (word) => {
  // Supprimer uniquement les espaces
  let oneWord = word.replace(/\s/g, "");
  let number = oneWord.length;
  console.log(number, "caractere");
};
calculLetter("Bonjour le monde !");

//2 Développez une fonction qui accepte un prénom en paramètre
// et renvoie une salutation personnalisée en mettant la première lettre en majuscule.

const helloUser = (mot) => {
  let phrase = "Bonjour";
  let majuscule = mot.charAt(0).toUpperCase() + mot.slice(1);
  phrase += majuscule;
  return phrase;
};
console.log(helloUser("herve"));
// ***************

// fonction qui détermine si une chaîne de caractères se termine par un point d'exclamation.

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

// fonction qui compte le nombre d'occurrences d'une lettre dans une chaîne
const countOccurrences = (str, letter) => {
  return str.split("").filter((char) => char === letter).length;
};

const text = "je verifie une chose importante";
const letter = "e";
console.log(countOccurrences(text, letter));
// ************************

// fonction qui convertit une chaîne en "camelCase"
const toCamelCase = (str) => {
  let result = str
    .toLowerCase() // Convertir tout en minuscule
    .replace(/[-_\s]+(.)?/g, (match, char) => (char ? char.toUpperCase() : "")); // Capitaliser après les séparateurs
  return result;
};

console.log(toCamelCase("convertir_en_camel_case"));
// *********************
//fonction qui compte le nombre de voyelle

const compterVoyelles = (chaine) => {
  const voyelles = "aeiouAEIOU";
  return [...chaine].reduce(
    (compteur, char) => (voyelles.includes(char) ? compteur + 1 : compteur),
    0
  );
};

console.log(compterVoyelles("Bonjour, comment ça va ?")); // Résultat : 9
// **************

// fonction qui compte le nombre de voyelles dans une chaîne
const alternerMajusculesMinuscules = (chaine) =>
  [...chaine]
    .map((char, index) =>
      index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");

console.log(alternerMajusculesMinuscules("bonjour tout le monde"));
// *****************
// fonction qui alterne majuscules et minuscules dans une chaîne
