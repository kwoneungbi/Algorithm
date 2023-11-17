// 매개변수 : left, right 
// left 부터 right 까지의 약수의 개수가 짝수면 더하고 홀수이면 뺀 값 리턴

// solution #1
const solution = (left, right) => {
    let divisor = [];
    let result = 0;
    for(let i = left; i <= right; i += 1) {
        for(let j = 1; j <= i; j += 1) {
            if(i % j === 0) divisor.push(j)
        }
        divisor.length % 2 ? result -= i : result += i
        divisor = [];
    }
    return result;
}

// solution #2
// 제곱근이 정수면 약수의 갯수가 홀수이다.

// const solution = (left, right) => {
//     let result = 0;
//     for (let i = left; i <= right; i += 1) {
//         Number.isInteger(Math.sqrt(i)) ? result -= i : result += i;
//     }
//     return result;
// }