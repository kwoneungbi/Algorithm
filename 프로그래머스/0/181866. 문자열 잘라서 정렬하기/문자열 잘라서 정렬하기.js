// solution #1
// const solution = (myString) => myString.split("x").filter(x => x !== "").sort();

// solution #2
const solution = (myString) => myString.match(/[^x]+/g).sort();

