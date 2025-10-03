import { primeirosElementos } from "./q4";

test('deve retornar apenas os 2 primeiros elementos do array', () => {
    let inputArray: number[] = [2,4,6,2,8,9,5]
    let expectedArray: number[] = [2, 4]
    
    let result = primeirosElementos(inputArray)

    expect(result).toEqual(expectedArray)
})