// solution #1
// const solution = num_list => {
//     const last = num_list[num_list.length-1];
//     const lastone = num_list[num_list.length-2];
    
//     last > lastone ? num_list.push(last - lastone) : num_list.push(last * 2);
//     return num_list;
// }

// solution #2
const solution = (num_list) => {
    const [sec, last] = num_list.slice(-2);
    last > sec ? num_list.push(last - sec) : num_list.push(last * 2);
    return num_list;
}