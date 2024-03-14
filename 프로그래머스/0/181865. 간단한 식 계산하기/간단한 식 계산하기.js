// solution #1
// const solution = (binomial) => eval(binomial);

// solution #2
const solution = (binomial) => {
    const [a, ex, b] = binomial.split(" ");    
    return (ex === "+")? +a + +b : (ex === "-")? a - b : a * b;
}