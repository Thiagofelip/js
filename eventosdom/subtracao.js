function sub() {
    var v1 = document.getElementById('sub1')
    var v2 = document.getElementById('sub2')
    var res = document.getElementById('res')
    var n1 = Number(v1.value)
    var n2 = Number(v2.value)
    var s = n1 - n2

    res.innerHTML = `${n1} - ${n2} é igual a ${s}`
}