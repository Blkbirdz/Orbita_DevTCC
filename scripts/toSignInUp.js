const urlLogin = '../paginas/login.html'
const urlRegistro = '../paginas/registro.html'
const divSignIn = document.getElementById('divSignIn')
const divSignUp = document.getElementById('divSignUp')
const toSignIn = document.getElementById('toSignIn')
const toSignUp = document.getElementById('toSignUp')

// sumindo com as div's
divSignIn.style.display = "none";
divSignUp.style.display = "none";

// codigos para aparecer e sumir as respectivas div's
goToLogin = () => {
    divSignUp.style.display = "none"
    divSignIn.style.display = "block"
}
goToRegistro = () => {
    divSignUp.style.display = "block" 
    divSignIn.style.display = "none"
}

// iniciar no formulario de registro
goToRegistro()

toSignIn.onclick = goToLogin
toSignUp.onclick = goToRegistro

