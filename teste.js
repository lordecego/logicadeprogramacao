/*Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final.*/

function retornaFuncao(text){
    text="Olá"

    return text + "!"
}

console.log(retornaFuncao())

// ou...

function cumprimentar(nome){
    
    olá="Olá, "
    return olá + nome+"!"

}
console.log(cumprimentar("Marilda"))


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

function inverso(valor){
    const tipo= typeof valor

    if(tipo =="boolean") return !valor
    else if(tipo =="number")return -valor
    else
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(true))
console.log(inverso(6))
console.log(inverso("2000"))




/*Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo. */

// esse não entendi mt bem, mas fui indo 
function recebeParametros(numero, minimo, maximo, inclusivo=false){
    if (inclusivo) return numero>=minimo && numero<=maximo
    return numero >minimo && numero< maximo

}

console.log(recebeParametros(10,100,50))


