// solution #1
// const solution = (my_string, index_list) => index_list.map(x => my_string[x]).join("");

// solution #2
const solution = (my_string, index_list) => index_list.reduce((acc, i) => acc + my_string[i], '');