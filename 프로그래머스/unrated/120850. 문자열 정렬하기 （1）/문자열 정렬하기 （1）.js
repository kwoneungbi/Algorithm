// const solution = (my_string) => my_string.match(/[0-9]/g).map(x=> Number(x)).sort((a, b)=> a-b)

// const solution = (my_string) => {
//     return my_string.split("").filter(x=>!isNaN(x)).map(x=>parseInt(x)).sort((a, b) => a-b)
// }

const solution = (my_string) => 
Array.from(my_string).filter(x=> !isNaN(+x)).sort((a, b) => a - b).map(x => +x);

