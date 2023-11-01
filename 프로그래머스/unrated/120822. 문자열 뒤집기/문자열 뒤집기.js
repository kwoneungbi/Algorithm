// solution #1
const solution = (my_string) => [...my_string].reverse().join("");


// solution #2
// const solution = (my_string) => Array.from(my_string).reverse().join("");


// solution #3
// const solution = (my_string) => my_string.split("").reverse().join("");


// solution #4
// function solution(my_string) {
//     var answer = '';

//     let arr = my_string.split('');
//     let arr2 = [];

//     for (let i = 0; i < arr.length; i++) {
//         arr2.unshift(arr[i]);
//     }

//     answer = arr2.join('');

//     return answer;
// }