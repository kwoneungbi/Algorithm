// solution #1
// function solution(num_str) {
//     return num_str.split("").reduce((acc,curr) => acc + +curr, 0);
// }

// solution #2
// const solution = (num_str) => [...num_str].reduce((acc,curr) => acc + +curr, 0);

// solution #3
function solution(num_str) {
    let sum = 0;
    let newArr = num_str.split("").map(Number);
    
    for (let i = 0; i < newArr.length; i++) {
        sum += newArr[i];
    }
    return sum;
}