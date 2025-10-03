export let ordenaArray = (array: string[]): string[] => {
    let arrayOrdenado: any[] = [...array].sort((a, b) => b.localeCompare(a));

    return arrayOrdenado;
}


