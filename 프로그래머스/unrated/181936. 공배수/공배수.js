// solution #1
// const solution = (number, n, m) => number % n === 0 && number % m === 0 ? 1 : 0;

// solution #2
const solution = (number, n, m) => {
    if(number % n != 0) {
        return 0;
    }
    if(number % m == 0) {
        return 1;
    } else return 0;
}