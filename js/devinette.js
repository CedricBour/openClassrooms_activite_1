/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log(">>> Bienvenue dans ce jeu de devinette ! <<<");
console.log("--------------------------------------------");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

/* VARIABLES */
var maxAttemptsNumber = 6;
var currentPlayerAttempt = 0;
var playerNumber;

console.log(""); 
console.log("But du jeu : trouvez le bon entier entre 1 et 100 en moins de " +
	maxAttemptsNumber + " essais"); 
console.log(""); 
console.log("--------------------------------------------");

while(true) {

	if(currentPlayerAttempt < maxAttemptsNumber) {

		playerNumber = prompt("Entrez un nombre");
		currentPlayerAttempt++;
		if(playerNumber > solution ) {
			console.log(playerNumber + " est trop grand. Essayez encore"); 
		} 
		else if(playerNumber < solution ) {
			console.log(playerNumber + " est trop petit. Essayez encore"); 
		} 
		else if(playerNumber == solution ) {
			console.log(""); 
			console.log("La solution est bien " + solution); 
			console.log("Félicitation, vous avez REUSSI !!!"); 
			console.log("Rechargez la page pour rejouer avec nous!")
		}
		else {
			console.log("Il y a eu une erreur, rechargez la page svp..."); 
		}
	}
	else {
	console.log("Vous n'avez plus d'essais !")
	console.log("Rechargez la page pour réessayer !")
	}

}