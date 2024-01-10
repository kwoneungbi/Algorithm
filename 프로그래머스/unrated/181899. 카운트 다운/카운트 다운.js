const solution = (start_num, end_num) => {
    let result = [];
    for(let i = start_num; i >= end_num; i -= 1) {
        result.push(i);
    }
    return result;
}