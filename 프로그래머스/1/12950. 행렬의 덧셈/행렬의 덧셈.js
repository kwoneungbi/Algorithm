// arr1 과 arr2를 더해주는데 이때 같은 뎁스끼리 더해주기

// solution #1
const solution = (arr1, arr2) => arr1.map((a, i)=> a.map((b, j) => b + arr2[i][j]));

// solution #2
// const solution = (arr1, arr2) => {
//     var result = [[]];
    
//     for (var i = 0; i < arr1.length; i += 1){
//         result[i] =[];
//         for(var j = 0; j < arr1[i].length; j += 1){
//             result[i].push(arr1[i][j] + arr2[i][j]);
//         }
//     }
//     return result;
// }