export function numerosQuadradoFor(array: number[]): number[] {
    let arrayQuadrado: number[] = [];
    
    for (let i = 0; i < array.length; i++){
        arrayQuadrado.push(array[i] * array[i]);
    };

    return arrayQuadrado;
}   

export function numerosQuadradosForEach(array: number[]): number[] {
    let arrayQuadrado: number[] = [];
    array.forEach((numero) => {
        arrayQuadrado.push(numero * numero);
    }); 

    return arrayQuadrado;
}; 
