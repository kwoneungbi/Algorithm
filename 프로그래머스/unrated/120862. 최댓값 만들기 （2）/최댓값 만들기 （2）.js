// solution #1
const solution = (numbers) => {
	const sort = numbers.sort((a, b) => a - b);

	return sort[0] * sort[1] > sort[sort.length-1] * sort[sort.length-2] ?
	sort[0] * sort[1] : sort[sort.length-1] * sort[sort.length-2];
}

// solution #2
// const solution = (numbers) => {
//     numbers.sort((a, b) => a - b);
//     return Math.max(numbers[0]*numbers[1], 
// 		numbers[numbers.length-1]*numbers[numbers.length-2]);
// }

// solution #3
// const solution = (numbers) => {
//     const length = numbers.length;

//     numbers.sort((a,b) => a - b);

//     return Math.max(
//         numbers[length-1] * numbers[length-2],
//         numbers[0] * numbers[1]
//     )
// }