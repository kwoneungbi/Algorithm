// solution #1 // 등차수열 
const solution = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2 


// solution #2
// const solution = (a, b) => {
//     if(a === b) return a;
//     let result = 0;
//     if(a - b < 0) {
//         for(let i = a; i <= b; i += 1) {
//             result += i;
//         }
//     }
//     if(a - b > 0) {
//         for(let i = a; i >= b; i -= 1) {
//             result += i;
//         }
//     }
//     return result;
// }

// solution #3
// const solution = (a, b) => {
//     let result = 0;
//     for(let i = Math.min(a, b); i <= Math.max(a,b); i += 1) {
//         result += i;
//     }
//     return result;
// }