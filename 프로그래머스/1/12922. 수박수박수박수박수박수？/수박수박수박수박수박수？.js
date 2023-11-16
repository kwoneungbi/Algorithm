// solution #1
const solution = (n) => "수박".repeat(n/2+1).slice(0,n);

// solution #2
// const solution = (n) => {
//     const a = Array(n).fill("수")
//     for(let i = 1; i < n; i += 2){
//         a[i] = "박"
//     }
//     return a.join("");
// }

// solution #3
// const solution = (n) =>'수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');

// solution #4
// const solution = (n) => {
//   var result = ""
//   for(var i = 0; i < n; i += 1){
//     result += (i % 2 === 0) ? "수" : "박"
//   }
//   return result;
// }