import { concatenaArray } from './q2.js';

test('deve retornar uma string com os elementos do array separado em espaços', () => {
    let inputArray: string[] = ['Arrays', 'com', 'Typescript'];
    let expectedString = "Arrays com Typescript";

    const result = concatenaArray(inputArray);
    expect(result).toEqual(expectedString);
});