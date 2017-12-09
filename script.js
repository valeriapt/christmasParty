function myFunction() {
 	var nume= $('#nume').val();
	var prenume= $('#prenume').val();
	document.cookie = prenume;
	document.getElementById ('nume').value =' ';
	document.getElementById ('prenume').value =' ';
	window.location.assign("mesaj.html");
}
