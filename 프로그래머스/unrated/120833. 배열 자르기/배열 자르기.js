// solution #1
const solution = (numbers, num1, num2) => numbers.splice(num1, num2-num1+1);


// solution #2
// const solution = (numbers, num1, num2) => {
//   let arr = [];
//   for(let i = num1; i <= num2; i += 1) {
//     arr.push(numbers[i]);
//   }return arr;
// } 
