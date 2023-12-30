// solution #1
// const solution = (my_string, k) => my_string.repeat(k);

// solution #2
const solution = (my_string, k) => {
    let result = ""
    for(let i = 0; i < k; i += 1) {
        result += my_string;
    }
    return result;
}