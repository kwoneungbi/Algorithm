// solution #1
// const solution = (myString) => [...myString].map(x => x.toUpperCase()).join('');

// solution #2
// const solution = (myString) => {
//     let result = "";
//     for(let i = 0; i < myString.length; i += 1) {
//         result += myString[i].toUpperCase();
//     } 
//     return result;
// }

// solution #3
const solution = (myString) => myString.toUpperCase();