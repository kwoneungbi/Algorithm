const solution = num_list => {
    let a = 0;
    let b = 0;
    
    num_list.map((x, idx) => {
    idx % 2 ? a += num_list[idx] : b += num_list[idx]
    });
    return Math.max(a, b);
}