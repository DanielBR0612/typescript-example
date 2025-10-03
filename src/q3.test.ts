import { ordenaArray } from "./q3";

test('deve retornar o array ordenado de forma decrescente', () => {
   let inputArray = ['carro' ,'boneco', 'ave', 'lapis']
   let expectedArray = ['lapis', 'carro', 'boneco', 'ave']

   const result = ordenaArray(inputArray)

   expect(result).toEqual(expectedArray);
})