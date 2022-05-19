function soma() {
    var sm1 = document.getElementById('num1')
    var sm2 = document.getElementById('num2')
    var re = document.getElementById('res')
    var s1 = Number(sm1.value)
    var s2 = Number(sm2.value)
    var s = s1 + s2

    res.innerHTML = s
}

function sub() {
    var sb1 = document.getElementById('num1')
    var sb2 = document.getElementById('num2')
    var re = document.getElementById('res')
    var s1 = Number(sb1.value)
    var s2 = Number(sb2.value)
    var s = s1 - s2

    res.innerHTML = s

}

function mult() {
    var mt1 = document.getElementById('num1')
    var mt2 = document.getElementById('num2')
    var re = document.getElementById('res')
    var m1 = Number(mt1.value)
    var m2 = Number(mt2.value)
    var m = m1 * m2

    res.innerHTML = m

}

function div(){
    var dv1 = document.getElementById('num1')
    var dv2 = document.getElementById('num2')
    var re = document.getElementById('res')
    var d1 = Number(dv1.value)
    var d2 = Number(dv2.value)
    var d =d1 / d2

    res.innerHTML = d

}