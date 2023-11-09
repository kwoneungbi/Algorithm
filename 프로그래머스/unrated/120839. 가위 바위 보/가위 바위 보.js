// solution #1
const solution = (rsp) => rsp.split("").map(x=>x==="2"?"0":x==="0"?"5":"2").join("");

// solution #2
// const solution = (rsp) => 
// rsp.split("").map(x=>x==="2"?"0":x==="0"?"5":"2").join("");

// solution #3
// function solution(rsp) {
//     let arr = {
//         2: 0,
//         0: 5,
//         5: 2
//     };
//     var answer = [...rsp].map(v => arr[v]).join("");
//     return answer;
// }