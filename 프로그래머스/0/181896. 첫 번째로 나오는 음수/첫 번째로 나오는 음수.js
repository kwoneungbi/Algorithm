// solution #1
const solution = (num_list) => {
    let result = 0;
    
    for(let i = 0; i < num_list.length; i += 1) {
        if(num_list[i] < 0) {
            result = i;
            break;
        }
        result = -1
    }
    return result;
}

// solution #2
// const solution = num_list => num_list.findIndex((x) => x < 0)