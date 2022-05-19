var n1 = Number(window.prompt('Digite um número '))//o valor recebido é considerado um string e não número
var n2 = Number(window.prompt('Digite outro número '))
var s = n1 + n2
window.alert(`A soma entre ${n1} e ${n2} é igual a ${s}`)



//(number + number) para adição
//(string + string) para concatenação

/*
Pra converter uma string para number.
* Number(): o JS vai decidir 
* Number.parseFloat(): para números reais(floats)
* Number.parseInt(): para números inteiros
*/

/* 
Para converter um number em string
* String()
* n.toString()

ex:
window.alert('A soma dos número é ' + String(s))
window.alert('A soma dos número é ' + s.toString())

*/

// `qualquer coisa ${} (esta parte do cifrão e as chaves se chama place holder)