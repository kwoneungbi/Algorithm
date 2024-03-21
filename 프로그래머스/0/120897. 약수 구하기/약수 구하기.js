// solution #1
// const solution = (n) => {
//     let num = n;
//     let result = [];
//     let index = 1;
    
//     while (index <= num) {
//       if (num % index === 0) result.push(index)
//       index++
//     }
//     return result;
// } 

// solution #2
const solution = (n) => Array(n).fill(0).map((v, index) => v + index + 1).filter((v) => n % v === 0);
