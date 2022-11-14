const {
    cumprimenta,
    calculaDesconto,
    somatorio,
    fatorial,
    calculaMedia,
    equacaoDeSegundoGrau,
    extraiElementosDaData,
    fibonacci
} = require('./funcoes');

describe('Essencial', () => {
    test('Deve cumprimentar o cliente.', () => {
        expect(cumprimenta('Capitão América')).toBe('Olá, Capitão América!');
        expect(cumprimenta('Harry Potter')).toBe('Olá, Harry Potter!');
        expect(cumprimenta('Daenerys Targaryen')).toBe('Olá, Daenerys Targaryen!');
    });
    
    test('Deve calcular desconto', () => {
        expect(calculaDesconto(150, 1)).toBe(0);
        expect(calculaDesconto(137, 2)).toBeCloseTo(4.11);
        expect(calculaDesconto(256, 3)).toBeCloseTo(17.92);
        expect(calculaDesconto(847, 4)).toBeCloseTo(101.64);
        expect(calculaDesconto(357, 5)).toBeCloseTo(71.4);
        expect(calculaDesconto(951, 6)).toBeCloseTo(190.2);
    });
    
    test('Deve calcular somatório', () => {
        expect(somatorio(0)).toBe(0);
        expect(somatorio(300)).toBe(45150);
        expect(somatorio(500)).toBe(125250);
    });
    
    test('Deve calcular fatorial', () => {
        expect(fatorial(7)).toBe(5040);
        expect(fatorial(15)).toBe(1307674368000);
    });

    test('Deve calcular média de notas.', () => {
        calculaMedia([5, 5, 5]).toBe(5);
        calculaMedia([7, 9, 8]).toBe(8);
        calculaMedia([3, 5, 4]).toBe(4);
    });
});

describe('Importante', () => {

    test('Deve calcular equacao do segundo grau', () => {
        let raizes1 = equacaoDeSegundoGrau(4, 2, -1);
        expect(raizes1[0]).toBeCloseTo(0.309);
        expect(raizes1[1]).toBeCloseTo(-0.809);
    
        let raizes2 = equacaoDeSegundoGrau(7, 15, 2);
        expect(raizes2[0]).toBeCloseTo(-0.14);
        expect(raizes2[1]).toBeCloseTo(-2);
    });
    
});

describe('Desafio', () => {
        
    test('Deve retornar elementos da data.', () => {
        let data1 = extraiElementosDaData('15/11/1889');
        expect(data1[0]).toBe('15');
        expect(data1[1]).toBe('11');
        expect(data1[2]).toBe('1889');

        let data2 = extraiElementosDaData('13/05/1888');
        expect(data2[0]).toBe('13');
        expect(data2[1]).toBe('05');
        expect(data2[2]).toBe('1888');
    });

    test('Deve retornar elemento de Fibonacci', () => {
        expect(fibonacci(12)).toBe(144);
        expect(fibonacci(20)).toBe(6765);
    });

});