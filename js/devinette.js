/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log(">>> Bienvenue dans ce jeu de devinette ! <<<");
console.log("--------------------------------------------");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
var nbEssaisMax = 6;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

console.log(""); 
console.log("But du jeu : trouvez le bon entier entre 1 et 100 en moins de " +
	nbEssaisMax + "essais".); 
console.log(""); 
console.log("--------------------------------------------");

