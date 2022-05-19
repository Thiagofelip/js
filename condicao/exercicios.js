function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p> A sua velocidade atual é de <strong>  ${vel} </strong> Km/h</p>`
    if (vel > 60) {
        res.innerHTML += `<p> Você tomou foi no meio do <strong>cú</strong> por dirigir acima da velocidade permitida`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>` //foi necessário colocar + antes do =, porque se não iria apagar a mensagem anterior


}