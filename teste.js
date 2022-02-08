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


/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês. */

function nomeDoMes(mes){

        switch(mes){
            case 1 :
                return "Janeiro"
           
                break;
            case 2:
                return "Fevereiro"
                break;
            
            case 3: 
                return "Março"
                
                break;
            case 4: 
                return "Abril"
                break; 
            case 5: 
                return "Maio"   
                break;
            case 6: 
                return "Junho"
                break;
            case 7: 
                return "Julho"
                break;
            case 8: 
                return "Agosto"
                break;
            case 9: 
                return "Setembro"
                break;
            case 10: 
                return "Outubro"
                break;
            case 11:
                return "Novembro"
                break;
            case 12: 
                return "Dezembro"    
                break;
                default:
                return "O Mês não existe"    
        }
}

console.log(nomeDoMes(5))


//Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

function maiorOuIgual(numero1,numero2){
   return numero1>=numero2

}

console.log(maiorOuIgual(2,3))


/*Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...". */

