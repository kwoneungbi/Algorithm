// solution #1
const solution = (numbers) => numbers.map(item => item * 2);

// solution #2
// const solution = (numbers) => numbers.reduce((a, b) => [...a, b * 2], []);

// solution #3
// const solution = (numbers) => {
// 	let arr = [];
// 	for(let i = 0; i < numbers.length; i+=1){
// 		arr.push(numbers[i] * 2);
// 		}
// 	return arr;
// } 