const urlLogin = '../paginas/login.html'
const urlRegistro = '../paginas/registro.html'
const divSignIn = document.getElementById('divSignIn')
const divSignUp = document.getElementById('divSignUp')
const formulario = document.getElementById('signInUp')
const toSignIn = document.getElementById('toSignIn')
const toSignUp = document.getElementById('toSignUp')


// fetch's para carregar os htmls de login e registro

fetch(urlLogin)
        .then(resp => resp.text() )
        .then(html => divSignIn.innerHTML = html)
fetch(urlRegistro)
        .then(resp => resp.text() )
        .then(html => divSignUp.innerHTML = html)


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

console.log(document.querySelector('#divSignIn'))

// iniciar no formulario de registro
goToRegistro()

