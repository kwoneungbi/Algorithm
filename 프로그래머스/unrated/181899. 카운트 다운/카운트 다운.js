// solution #1
const solution = (start_num, end_num) => {
    let result = [];
    for(let i = start_num; i >= end_num; i -= 1) {
        result.push(i);
    }
    return result;
}

// solution #2
// const solution = (start_num, end_num) => Array.from(Array(start_num - end_num + 1), (_, i) => start_num - i);