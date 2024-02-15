// solution #1
// const solution = (my_string, index_list) => index_list.map(x => my_string[x]).join("");

// solution #2
// const solution = (my_string, index_list) => index_list.reduce((acc, i) => acc + my_string[i], '');

// solution #3
const solution = (my_string, index_list) => {
    const result = [];
    
    for(let i = 0; i < index_list.length; i += 1){
        result.push(my_string[index_list[i]]);
    }
    return result.join('');
}