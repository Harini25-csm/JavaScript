export const add = (...nums) => nums.reduce((sum, n) => sum + Number(n), 0);
console.log("<p><b>Sum of 15 and 25:</b> " + add(15, 25) + "</p>");