function myFunction() {
 	var nume = document.getElementById('nume').value;
	var prenume = document.getElementById('prenume').value;
	// document.getElementById ('nume').value =' ';
	// document.getElementById ('prenume').value =' ';
}

function displayLetter() {
	var prenume = document.getElementById('prenume').value;
	if(!prenume || prenume == "") {
		alert("Scrie-ti prenumele te rog :)");
		return;
	}

	document.getElementById('camp').style.display = "none";
	document.getElementById('mesaj').style.display = "block";
	document.getElementById('mesajChallenge').style.display = "none";

	var nume = document.getElementById('nume').value;
	

	nameForLetter = document.getElementById("numeScrisoare");
	nameForLetter.innerHTML = "Draga " + prenume + ",";
}


nrOfChallenges = 10;

function displayRandomChallenge() {
	var challengeNr = Math.floor(Math.random() * nrOfChallenges + 1);
	console.log(challengeNr);

	document.getElementById('camp').style.display = "none";
	document.getElementById('mesaj').style.display = "none";
	document.getElementById('mesajChallenge').style.display = "block";

	var nrChallengeElem = document.getElementById("nrChallenge");
	nrChallengeElem.innerHTML = challengeNr;

}



