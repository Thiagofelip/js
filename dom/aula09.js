/*
DOM - Document Object Model
Um conjunto de objetos dentro do navegador que da acesso aos componentes internos do site

ARVORE DOM:
        WINDOW
LOCATION DOCUMENT HISTORY
            HTML
        HEAD    BODY

Selecionando elementos do DOM

SELECIONANDO POR MARCA
getElementsByTagName()
ex:
var p1 = window.document.getElementsByTagName('p')[1]
*/

/*
SELECIONANDO POR ID
getElementById()
var d = window.document.getElementById('msg')
(não esquecer de definir o ID no HTML)

*/

/*
SELECIONANDO POR NOME
getElementsByName()
var d = window.document.getElementByName('msg')
(Não esquecer de definir o name no HTML)
*/

/*
SELECIONANDO POR CLASSE
getElementsByClassName()
var d = window.document.getElementsByClassName('msg')
(Não esquecer de definir a Class no HTML)
*/

/*
SELECIONANDO POR SELETOR
* É um metódo mais recente, navegadores antigos não tem suporte. Testar antes
querySelector()
querySelectorAll()
var d = window.document.querySelector('#msg')
*/

let p1 = window.document.getElementsByTagName('p')[0]
window.document.write(p1.innerText)

var d = document.querySelector('div#msg')
d.style.background = 'black'
