const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const logInButton = document.getElementById('log_in');

logInButton.addEventListener('click', () => {
	const login_email = document.getElementById('login_email').value;
	const login_pass = document.getElementById('login_pass').value;
	if(login_email == 'eayala' && login_pass =='idat2011'){
		alert("PAJERO DETECTADO !!! ERES EL REY DE LA PAJA NO CAMBIAS !!")
	}
});

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});