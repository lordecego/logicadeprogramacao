/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function retornaFuncao(text){
    text="Olá"

    return text + "!"
}

console.log(retornaFuncao())


//Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias

function converterIdadeEmAnosParaDias(idade){
    return idade*365 + " Dias"
    
}

console.log(converterIdadeEmAnosParaDias(25))

/*Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.*/

function SalarioPorHora(horaTrabalhada, recebePorHora){
    total =horaTrabalhada * recebePorHora
    return `Salário igual a R$ ${total}`
}

console.log(SalarioPorHora(150, 40.5))


