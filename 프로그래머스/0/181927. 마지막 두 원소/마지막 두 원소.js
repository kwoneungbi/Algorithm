const solution = num_list => {
    const last = num_list[num_list.length-1];
    const lastone = num_list[num_list.length-2];
    
    last > lastone ? num_list.push(last - lastone) : num_list.push(last * 2);
    return num_list;
}