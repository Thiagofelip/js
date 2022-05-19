function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('#txtn2')//tanto o getElement quato o querry neste caso pode ser utilizado
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value) 
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong> ${s} </strong>`

}