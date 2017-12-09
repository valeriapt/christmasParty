function myFunction() {
 	var nume = document.getElementById('nume').value;
	var prenume = document.getElementById('prenume').value;
	// document.getElementById ('nume').value =' ';
	// document.getElementById ('prenume').value =' ';
}

function displayLetter() {
	var nume = document.getElementById('nume').value;
	var prenume = document.getElementById('prenume').value;

	nameForLetter = document.getElementById("numeScrisoare");
	nameForLetter.innerHTML = "Draga " + prenume + ",";
	displayRandomChallenge();

}


nrOfChallenges = 10;

function displayRandomChallenge() {
	var challengeNr = Math.floor(Math.random() * nrOfChallenges + 1);
	console.log(challengeNr);

	var nrChallengeElem = document.getElementById("nrChallenge");
	nrChallengeElem.innerHTML = challengeNr;

}



