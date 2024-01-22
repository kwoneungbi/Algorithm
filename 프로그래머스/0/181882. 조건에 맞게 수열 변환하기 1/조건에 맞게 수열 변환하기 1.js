// solution #1
const solution = (arr) => arr.map(x => x >= 50 && x % 2 === 0 ? x / 2 : x < 50 && x % 2 === 1 ? x * 2 : x); 

// solution #2
// const solution = (arr) => {
//     const result = [];
//     for(let i = 0; i < arr.length; i += 1) {
//         const num = arr[i]
//         if(num >= 50 && num % 2 === 0) result.push(num / 2);
//         else if(num < 50 && num % 2 === 1) result.push(num * 2);
//         else result.push(num);
        
//     }
//     return result;
// }

// solution #3
// const solution = (arr) => {
//     const result = [];
//     for(let i of arr) {
//         if(i >= 50 && i % 2 === 0) result.push(i / 2);
//         else if(i < 50 && i % 2 === 1) result.push(i * 2);
//         else result.push(i);   
//     }
//     return result;
// }