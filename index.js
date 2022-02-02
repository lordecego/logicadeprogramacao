//1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” 
//no final.

function stringretorno(){

    return "olá" + "!"
}

console.log(stringretorno())



//2 – Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
//multiplicação e divisão desses valores.

function calculadora(valor1,valor2){
    console.log(`A Soma é :${valor1 + valor2}`)
    console.log(`A Subtração é :${valor1 - valor2}`)
    console.log(`A Multiplicação é :${valor1 * valor2}`)
    console.log(`A Divisão é :${valor1 / valor2}`)
}

calculadora(2,4)


//3 – Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true ou false.

function numerointeiro(numero){

    if(numero %3 ===0){
        return true
    }
    else{
        return false
    }
}

console.log(numerointeiro(3))
console.log(numerointeiro(9))
console.log(numerointeiro(10))


//4 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. 
//Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.


function recebeMes (mes){
    switch(mes){
        case 1: 
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
        
        case 6:
        return "Junho"

        case 7:
        return "Julho"

        case 8:
        return "Agosto"

        case 9:
        return "Setembro"

        case 10:
        return "Outubro"

        case 11:
            return "Novembro"

        case 12:
        return "Dezembro"


        default:
            return "Não reconhecemos esse mês"
           
    }

}

console.log(recebeMes(2))
console.log(recebeMes(7))