// solution #1
// const solution = (n) => {
//     let result = 0;
//     let f0 = 0
//     let f1 = 1;
    
//     for(let i = 2; i <= n; i++){
//         result = (f0 + f1) % 1234567;
//         f0 = f1;
//         f1 = result;
//     }
//     return result;
// }

// solution #2
const solution = (n) => {
    const memo = [0, 1]; 
    
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
    }
    
    return memo[n];
};
