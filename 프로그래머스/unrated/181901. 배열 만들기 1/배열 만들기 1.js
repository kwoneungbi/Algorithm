// solution #1
const solution = (n, k) => 
    Array(n).fill(1).map((x, y) => x + y).filter(a => a % k === 0);

// solution #2
// const solution = (n, k) => {
// 	let arr = [];
// 	for(let i = 1; i <= n; i += 1) {
// 		if(i % k === 0) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }