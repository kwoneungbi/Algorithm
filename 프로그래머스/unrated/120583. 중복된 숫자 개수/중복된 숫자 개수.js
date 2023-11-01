// solution #1
const solution = (array, n) => array.filter(x=>x===n).length;


// solution #2
// const solution = (array, n) => {
// 	let arr = 0;
// 	for(let i of array){
// 		if(i===n){
// 			arr++;	
// 		}
// 	}
// 	return arr;
// }


// solution #3
// const solution = (array, n) => {
// 	let arr = 0;
// 	array.map(x=>x===n && arr++)
//     return arr;
// }