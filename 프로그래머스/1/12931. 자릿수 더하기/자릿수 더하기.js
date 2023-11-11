// solution #1
const solution = (N) => String(N).split("").reduce((acc, curr) => acc + Number(curr),0);

// solution #2
// const solution = (N) => {
//     const arrayStrN = N.toString().split("");
//     let result = 0;
//     for(let i = 0; i < arrayStrN.length; i += 1) {
//         result += +arrayStrN[i]
//     }
//     return result;
// }
