// solution. #1
// const solution = (myString) => [...myString].map(x => x === 'a' || x === 'A' ? 'A' : x.toLowerCase()).join("");

// solution #2
const solution = (myString) => myString.toLowerCase().replaceAll('a','A');