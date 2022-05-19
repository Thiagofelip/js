function mult() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('#txtn2')
    var res = document.querySelector('#res')//poderia utilizar o getElementById
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 * n2

    res.innerHTML = s
}