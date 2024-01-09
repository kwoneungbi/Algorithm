// solution #1
const solution = num_list => {
    let a = 0;
    let b = 0;
    
    num_list.map((x, idx) => {
    idx % 2 ? a += num_list[idx] : b += num_list[idx]
    });
    return Math.max(a, b);
}

// solution #2
// const solution = num_list => Math.max(...num_list.reduce(([x, y], c, i) => i % 2 ? [x + c, y] : [x, y + c], [0, 0]));

// solution #3
// const solution = num_list => {
//     let a = 0;
//     let b = 0;
//     for(let i=0; i<num_list.length; i++){
//         if(i%2) a += num_list[i];
//         else b += num_list[i];
//     }
//     const arr = [a,b];
//     return Math.max(...arr);
// }
