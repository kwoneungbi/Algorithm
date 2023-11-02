// solution #1
const solution = (sides) => {
	const sort = sides.sort((a, b) => b - a);
	return sort[0] >= sort[1] + sort[2] ? 2 : 1;
}

// solution #2
// const solution = (sides) => {
//     sides.sort((a,b)=>a-b);
//     const t = sides.pop();
//     return sides.reduce((a,b)=>a+b) > t ? 1 : 2
// }