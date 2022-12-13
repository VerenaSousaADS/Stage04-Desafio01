let number1 = Number(prompt("Digite o primeiro número: "))
let number2 = Number(prompt("Digite o segundo número: "))

sum = number1 + number2
sub = number1 - number2
mult = number1 * number2
div = number1 / number2
reminder = number1 % number2

diferent = number1 != number2
pair = (sum % 2) == 0


alert(`A soma dos dois números é ${sum}`)
alert(`A subtração dos dois números é ${sub}`)
alert(`A divisão dos dois números é ${div}`)
alert(`O resto da divisão dos dois números é ${reminder}`)

if(diferent){
    alert("Os dois números digitados são diferentes")
} else{
    alert("Os dois números digitados são iguais")
}

if(pair){
    alert("A soma dos é par")
}else{
    alert("A soma dos é ímpar")

}
