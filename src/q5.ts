export let numerosPares = (array: number[]): number[] => {
    let arrayFiltrado: number[] = [...array].filter((num: number) => num % 2 === 0)

    return arrayFiltrado;
}
