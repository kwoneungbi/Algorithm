// solution #1
// const solution = (num_list) => num_list.sort((a, b) => a - b).filter((_, i) => i < 5);

// solution #2
// const solution = (num_list) => num_list.sort((a, b) => a - b).slice(0, 5);

// solution #2
const solution = (num_list) => num_list.sort((a, b)=> a - b).splice(0, 5);