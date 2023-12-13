// solution #1
const solution = (A, B) => {
    const sortA = A.sort((a, b) => a - b);
    const sortB = B.sort((a, b) => b - a); 
    
    return sortA.reduce((acc, curr, i) => acc + curr * sortB[i], 0);
}

// solution #2
// const solution = (A, B) => {
//     const sortA = A.sort((a, b) => a - b); 
//     const sortB = B.sort((a, b) => b - a); 
// 	let result = 0;
    
// 	sortA.forEach((x, i) => {
// 		result += x * sortB[i];
//     })
// 	return result;
// }
