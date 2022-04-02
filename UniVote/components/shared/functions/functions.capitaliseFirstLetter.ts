export const capitaliseFirstLetter = (text: string): string =>{

    return text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}