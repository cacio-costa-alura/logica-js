/**
 * Implemente uma função que receba o nome de um cliente e devolve um cumprimento para ele.
 * 
 * EXEMPLO: 
 *   - Se o nome do cliente é Bill Gates, o cumprimento deve ser "Olá, Bill Gates!".
 *   - Se o nome do cliente é Steve Jobs, o cumprimento deve ser "Olá, Steve Jobs!".
 */
 function cumprimenta(nome) {
    return `Olá, ${nome}!`;
}

/**
 * Implemente uma função que recebe o valor de uma compra e a quantidade de itens comprados,
 * e retorne o valor do desconto de acordo com a quantidade de itens. 
 * 
 * A TABELA DE DESCONTO É:
 *   - 1 item: 0 de desconto;
 *   - 2 itens: 3% de desconto;
 *   - 3 itens: 7% de desconto;
 *   - 4 itens: 12% de desconto;
 *   - 5 itens ou mais: 20% de desconto.
 */
function calculaDesconto(valor, quantidade) {
    if (quantidade == 2) {
        return valor * 0.03;
    } else if (quantidade == 3) {
        return valor * 0.07;
    } else if (quantidade == 4) {
        return valor * 0.12;
    } else if (quantidade >= 5) {
        return valor * 0.2;
    } else {
        return 0;
    }
}

/**
 * Implemente uma função que receba um número X e devolva a soma dos número de 1 a X.
 * 
 * EXEMPLO:
 *   - X é 100: calcula 1 + 2 + 3 + ... + 99 + 100, retorna 5050
 *   - X é 200: calcula 1 + 2 + 3 + ... + 199 + 200, retorna 20100
 */
function somatorio(numero) {
    var soma = 0;
    for (var i = 1; i <= numero; i++) {
        soma += i;
    }

    return soma;
}

/**
 * Implemente uma função que recebe um número N devolve o fatorial do número.
 * 
 * EXEMPLO:
 *   - n é 5: 5! = 120
 *   - n é 9: 9! = 362880
 */
function fatorial(numero) {
    var fatorial = 1;
    for (var i = numero; i > 1; i--) {
        fatorial *= i;
    }

    return fatorial;
}

/**
 * Implemente uma função que recebe um array com notas de um aluno e retorne o valor da média dele.
 */
 function calculaMedia(notas) {
    var total = 0;
    for (var i = 0; i < notas.length; i++) {
        total += notas[i];
    }

    return total / notas.length;
 }

/**
 * Implemente uma função que calcule uma função do segundo grau (ax² + bx + c = 0).
 * A função deve retornar um array com x1 na primeira posição e x2 na segunda posição.
 */
function equacaoDeSegundoGrau(a, b, c) {
    var delta = (b * b) - 4 * a * c;
    var raizDeDelta = Math.sqrt(delta);

    var x1 = (-b + raizDeDelta) / (2 * a);
    var x2 = (-b - raizDeDelta) / (2 * a);

    return [x1, x2];
}

/**
 * Implemente uma função que receba uma data no formato DD/MM/YYYY, 
 * extraia o dia, mês e ano, e retorne um array com:
 *   - o DIA na posição 1.
 *   - o MÊS na posição 2.
 *   - o ANO na posição 3.
 */
function extraiElementosDaData(data) {
    return data.split('/');
}

/**
 * i 1                                   C  
 * Considerando a sequência de Fibonacci 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...,
 * implemente uma função que receba a enésima posição da sequência, e devolva o algarismo correspondente.
 * 
 * EXEMPLO:
 *   - posição é 7: retorna o elemento 13.
 *   - posição é 8: retorna o elemento 21.
 */
function fibonacci(posicao) {
    var atual = 1;
    var anterior = 0;

    for (var i = 1; i < posicao; i++) {
        atual = atual + anterior;
        anterior = atual - anterior;
    }

    return atual;
}


module.exports = {
    cumprimenta,
    calculaDesconto,
    somatorio,
    fatorial,
    calculaMedia,
    equacaoDeSegundoGrau,
    extraiElementosDaData,
    fibonacci
}
