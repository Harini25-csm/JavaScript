// Exporting an arrow function that uses the rest parameter
export const multiply = (...numbers) => {
    let product = 1;
    for (const n of numbers) {
        product *= Number(n);
    }
    return product;
};