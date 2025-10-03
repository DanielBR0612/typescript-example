export let ordenaArray = (array: any[]): any[] => {
    return array.sort((a, b) => b.localeCompare(a))
}


