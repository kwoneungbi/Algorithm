// solution #1
const solution = (n) => parseInt([...n.toString(3)].reverse().join(""), 3);

// solution #2
// const solution = (n) => parseInt((Array.from(n.toString(3)).reverse().join("")),3);