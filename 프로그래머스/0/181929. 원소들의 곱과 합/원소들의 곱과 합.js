// solution 1
// const solution = (num_list) => num_list.reduce((acc, curr) => acc * curr) < num_list.reduce((acc, curr) => acc + curr) ** 2 ? 1 : 0;

// solution #2
const solution = (num_list) => {
    let accMul = 1;
    let accSum = 0;
    
    for(const num of num_list) {
        accMul *= num;
        accSum += num;
    }
    return accMul < accSum ** 2 ? 1 : 0;
}