// solution #1
// const solution = (myString) => {
//     const alphabet = 'abcdefghijk';
    
//     return [...myString].map(x => [...alphabet].includes(x) ? 'l' : x).join("");
// }

// solution #2
// const solution = (myString) => myString.replace(/[a-k]/g,'l');

// solution #3
const solution = (myString) => [...myString].map(v => v < 'l' ? 'l' : v).join('');
