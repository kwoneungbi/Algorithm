// solution #1
const solution = (n) => Array.from(String(n)).reverse().map(x=>Number(x));

// solution #2
// const solution = (n) => {
//     var answer = [];
//     var str = ""+n;
//     var arr = str.split("");
    
//     for(var i = 0; i<arr.length; i++){
//         answer.push(Number(arr[i]));
//     }
    
//     return  answer.reverse();
// }

// solution #3
// const solution = (n) => [...String(n)].reverse().map(x=>parseInt(x));

