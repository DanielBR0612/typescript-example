import { numerosPares } from "./q5";

test('deve retornar apenas os numeros pares do array', () => {
    let inputArray: number[] = [8, 3, 9, 5, 6, 12];
    let expectedArray: number[] = [8, 6, 12];

    let result = numerosPares(inputArray);

    expect(result).toEqual(expectedArray);
})