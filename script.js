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
	nameForLetter.innerHTML = "Draga " + nume + ",";
}


nrOfChallenges = 10;

function displayRandomChallenge() {
	int challengeNr = Math.floor(Math.random() * nrOfChallenges + 1);
	console.log(challengeNr);
}