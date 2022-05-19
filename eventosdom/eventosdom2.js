var a = document.getElementById('area')//poderia usar o queryselect também. Ficar espero se o getElement estiver no plural precisar usar [] e informar qual o elemento

a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar() {
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar() {
    a.innerText = 'Entrou!'
}

function sair() {
    a.innerText = 'Saiu!'
    a.style.background = 'green'
}