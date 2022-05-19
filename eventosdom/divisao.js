function dvd() {
    var dv1 = document.getElementById('dvs1')
    var dv2 = document.getElementById('dvs2')
    var res = document.getElementById('res')
    var d1 = Number(dv1.value)
    var d2 = Number(dv2.value)
    var d = d1 / d2

    res.innerHTML = `O número ${d1} divido por ${d2} é igual a ${d}`

}