// solution #1
const solution = (my_string, n) => my_string.split("").map(item=>item.repeat(n)).join("");


// solution #2
// const solution = (my_string, n) =>  Array.from(my_string).map(str=> str.repeat(n)).join("")


// solution #3
// const solution = (my_string, n) => {
//     let str = "";
//     for(let i = 0; i < my_string.length; i += 1) {
//         str += my_string[i].repeat(n)
//     }
//     return str;
// }



