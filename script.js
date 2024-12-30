// Exercice : Calculer la somme de tous les nombres de 1 à 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("La somme est :", sum);

// Affiche le résultat dans la page
document.getElementById("output").textContent = "La somme est : " + sum;
