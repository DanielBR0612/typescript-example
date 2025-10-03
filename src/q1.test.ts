import { numerosQuadradoFor } from './q1.js';
import { numerosQuadradosForEach } from './q1.js';

const inputArray = [3,5,7,3,8,9,1];
const expectedArray = [9, 25, 49, 9, 64, 81,  1];

test('deve retornar um novo array com o quadrado de cada número usando "for"', () => {
  const result = numerosQuadradoFor(inputArray);

  expect(result).toEqual(expectedArray);
});

test('deve retornar um novo array com o quadrado de cada número usando "forEach"', () => {
  const result = numerosQuadradosForEach(inputArray);
  
  expect(result).toEqual(expectedArray);
});
