// solution #1
// const solution = (my_string, indices) => [...my_string].filter((x, i) => !indices.includes(i)).join("");

// solution #2
// const solution = (my_string, indices) => {
//     var result = '';

//     for(let i = 0; i < my_string.length; i += 1){
//         if(!indices.includes(i)){
//             result += my_string[i];
//         }
//     }

//     return result;
// }

// solution #3
const solution = (my_string, indices) => {
  const set = new Set(indices);
    
  return [...my_string].filter((_, i) => !set.has(i)).join('');
}