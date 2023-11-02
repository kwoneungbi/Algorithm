// solution #1
const solution = (numbers) => {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}

// solution #2
// const solution = (numbers) => {
//     numbers.sort((a, b) => a - b)
//     return Math.max(...numbers) * numbers.at(-2);
// }

// solution #3
// const solution = (numbers) => 
// numbers.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b);