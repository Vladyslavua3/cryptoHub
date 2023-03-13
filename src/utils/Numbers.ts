export const numbers = (num:number) => {
    return new Intl.NumberFormat('en-EN',{
        style:'currency',
        currency:'USD',
    }).format(num)
}