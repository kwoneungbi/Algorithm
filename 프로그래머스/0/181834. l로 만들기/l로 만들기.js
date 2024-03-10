// solution #1
// const solution = (myString) => {
//     const alphabet = 'abcdefghijk';
    
//     return [...myString].map(x => [...alphabet].includes(x) ? 'l' : x).join("");
// }

// solution #2
const solution = (myString) => myString.replace(/[a-k]/g,'l')