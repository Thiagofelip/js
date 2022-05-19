function calcular(){
    var born = document.querySelector('#bornp')
    var live = document.querySelector('#livep')
    
    if (live.value == born.value ){
        res.innerHTML = 'Nativo'
    } else {
        res.innerHTML = 'Forasteiro'
    }

}