// solution #1
const solution = (array) => 
    array.sort((a, b) => a - b)[Math.floor(array.length/2)];


// solution #2
// const solution = (array) => 
// 	array.sort((a, b) => a - b).at(Math.floor(array.length/2));