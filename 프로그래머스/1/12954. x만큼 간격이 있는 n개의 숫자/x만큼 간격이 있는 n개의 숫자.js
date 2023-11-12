// solution #1
const solution = (x, n) => 
    Array(n).fill(0).map((e, i) => x * (i+1))

// solution #2
// const solution = (x, n) => {
//     const arr = [x];
//     let a = x;
//     for(let i = 1; i < n; i+=1) {
//         a += x
//         arr.push(a)
//     }
//     return arr;
// }


