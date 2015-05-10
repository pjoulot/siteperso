
function menuShow() {
	var classNom = document.getElementById('mainMenu').className;
	if(classNom == 'visible') {
		document.getElementById('mainMenu').className='hidden';
	}
	else {
		document.getElementById('mainMenu').className='visible';
	}
}