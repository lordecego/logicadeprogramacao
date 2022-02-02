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