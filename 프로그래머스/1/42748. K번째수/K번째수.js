const solution = (array, commands) => commands.map(([i,j,k]) => array.slice(i-1,j).sort((a, b) => a - b)[k-1]);

// const solution = (array, commands) => {
//     const result = [];
//     let aa = [];
//     commands.map(x => {
//         for(let i = x[0]-1; i <= x[1] -1; i += 1) {
//             aa.push(array[i]);
//         }
//         aa.sort((a, b) => a - b);
//         result.push(aa[x[2]-1]);
//         aa = [];
//     });
//     return result;
// }
