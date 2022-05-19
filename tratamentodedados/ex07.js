var nome = window.prompt('Qual é o seu nome?')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras. <br>`)
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()}. <br>`)
document.write(`Seu nome em minúsculo é ${nome.toLowerCase()}.`)


/*Para fixar duas casas decimais, basta utilizar o comando abaixo
n1.toFixed(2)

n1.toFixed(2).replace('.' , ',')

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})

n1.toLOcaleString('pr-BR', {style: 'currency', currency: 'EUR'})

*/