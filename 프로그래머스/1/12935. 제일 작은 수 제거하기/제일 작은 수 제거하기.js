// solution #1
const solution = (arr) => {
    let result = arr.filter(item => item !== Math.min(...arr));
    return result.length !== 0 ? result : [-1]
}

// solution #2
// const solution = (arr) => {
//     var result = [];
//     var min = Math.min(...arr);

//     for(var i = 0; i < arr.length; ++i) {
// 				if(arr[i] != min) {
// 						result.push(arr[i]);
// 				}
// 		}
//     return result.length !== 0 ? result : [-1];
// }

// solution #3
// const solution = (arr) => {
//     arr.splice(arr.indexOf(Math.min(...arr)), 1)
//     return arr.length !== 0 ? arr  : [-1]
// }