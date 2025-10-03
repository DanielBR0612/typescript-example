import { triangulo, retangulo } from "./q6.js"

describe('Triangulo', () => {

  test('deve lançar um erro ao tentar instanciar com ângulos inválidos', () => {
    const angulosInvalidos = [100, 50, 50]; 
    
    expect(() => {
      new triangulo(10, 5, angulosInvalidos);
    }).toThrow('Esse triangulo não existe');
  });

  test('deve calcular a área corretamente', () => {
    const tri = new triangulo(10, 8, [90, 45, 45]);
    const area = tri.area();
    expect(area).toBe(40); 
  });

  test('deve classificar o triângulo como "Retângulo"', () => {
    const tri = new triangulo(10, 5, [90, 50, 40]);
    expect(tri.defineTipo()).toBe("Retângulo");
  });

  test('deve classificar o triângulo como "Acutângulo"', () => {
    const tri = new triangulo(10, 5, [70, 60, 50]);
    expect(tri.defineTipo()).toBe("Acutângulo");
  });

  test('deve classificar o triângulo como "Obtusângulo"', () => {
    const tri = new triangulo(10, 5, [100, 40, 40]);
    expect(tri.defineTipo()).toBe("Obtusângulo");
  });
});


describe('Retangulo', () => {

  test('deve calcular a área corretamente', () => {
    const ret = new retangulo(15, 20, 'verde');
    expect(ret.area()).toBe(300); 
  });

  test('deve calcular o perímetro corretamente', () => {
    const ret = new retangulo(15, 20, 'verde');
    expect(ret.perimetro()).toBe(70); 
  });

  test('deve retornar a string de descrição correta', () => {
    const ret = new retangulo(15, 20, 'amarelo');
    const descricao = ret.descrever();

    expect(descricao).toContain('amarelo');
    expect(descricao).toContain('15');
  });
});