// const solution = (n) => {
//     let result = 0; 
//     for(let i = 0; i <= n; i += 1 ) {
//         if(n % i === 0 && i % 2 === 1) result ++; // 약수이면서 홀수인 경우
//     }
//     return result;
// } 

const solution = n => {
    let result = 0;
    let sum = 0;
    
    for(let i = 1; i <= n; i += 1) {
        for(let j = i; j <= n; j += 1) {
            sum += j;
            
            if(sum === n) {
                result += 1;
                sum = 0;
                break;
            }
            if(sum > n) {
                sum = 0;
                break;
            }
        }
    }
    return result;
}