// 매개변수 a, b는 길이가 같은 정수 배열
// solution #1
// const solution = (a, b) => {
//     let result = 0;
//     for(let i = 0; i < a.length; i += 1) {
//         result += a[i] * b[i]
//     }
//     return result
// }

// solution #2
const solution = (a, b) => a.reduce((acc, _, i) => acc + a[i] * b[i],0);

