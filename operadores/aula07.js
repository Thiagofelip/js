/*
Ordem de precedência dos operadores (o que é feito primeiro)

() - Entre parênteses
** - potência
* / % - Caso tenha mais de um na mesma conta, vem da esquerda pra primeira
+ - 
*/

var a = 5 + 3

// Se eu quiser fazer uma auto-atribuição basta seguir o exemplo abaixo:

/*
var n = 3
n = n + 4 (maneira normal)
n = 7

n += 4
n = 7 (maneira simplificada)
*/

/*
Incremento

Existe outra possibilidade que ao inves de usar o simplificado basta seguir o exemplo abaixo

n = 10

(normal)
n = n + 1
n = 11

(simplificado)
n += 1 
n = 11

(incremento)
n ++ 
n = 11

*/

/*
Operadores Relacionais:

> - Maior
< - Menor
>= - Maior ou igual que
<= - Menor ou igual que
== - Igual a 
!= - Diferente
=== - Idêntico
!== - Desigual restrito

Não tem ordem de execução apenas da esquerda pra direita
*/

/*
Operadores Lógicos:
! - Negação
&& - Conjunção ou (E lógico)
|| - Disjunção ou (Ou lógico)

ordem de execução:
1º !
2º &&
3º ||
*/

/* 
Primeiro é analisados os operadores aritméticos (+ - * etc)
, depois os ralacionais (<>= etc) e depois os lógicos
*/

/*
Operadores ternário
* Tem três operandos: teste ? true : false
? :
*/