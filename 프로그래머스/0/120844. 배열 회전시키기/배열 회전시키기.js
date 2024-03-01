// solution #1
const solution = (numbers, direction) => direction === 'right' ? [numbers[numbers.length-1], ...numbers.slice(0, -1)] : [...numbers.slice(1), numbers[0]];

  
// solution #2
// const solution = (numbers, direction) => {
//     if(direction === 'right') {
//         numbers.unshift(numbers.pop())
//     } else {
//         numbers.push(numbers.shift())
//     }
//     return numbers;
// }