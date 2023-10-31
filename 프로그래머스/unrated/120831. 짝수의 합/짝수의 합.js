// solution #1
// const solution = (n) => {
//     let arr = [];
//     for(i=0; i<=n; i+=1){
//         if(i%2===0){
//             arr.push(i);
//         }
//     }
//     return arr.reduce((sum, x)=>sum + x,0)
// }

// solution #2
// const solution = (n) => {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }

// solution #3
const solution = (n) => 
    Array(n).fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
