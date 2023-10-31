// solution #1
const solution = (number) => number.reduce((sum,x)=>sum+x,0)/number.length;


// solution #2

// const solution = (numbers) => {
//     let result = 0;

//     numbers.map((item) => {
//         result += item;
//     });

//     return result/numbers.length;
// }

// solution #3

// const solution = (numbers) =>  {
//     var answer = 0;
//     for(i of numbers) {
//         answer += i
//     }
//     return answer / numbers.length;
// }