// solution #1
// const solution = (my_string, is_prefix) => {
//     if(my_string[0] !== is_prefix[0]) return 0;
//     for(let i = 1; i < is_prefix.length; i += 1) {
//             if(my_string[i] !== is_prefix[i]) return 0;
//     }
//     return 1;
// }

// solution #2
// const solution = (my_string, is_prefix) => +my_string.startsWith(is_prefix);

// solution #3
const solution = (my_string, is_prefix) => my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
