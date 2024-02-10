const solution = (my_string, is_prefix) => {
    if(my_string[0] !== is_prefix[0]) return 0;
    for(let i = 1; i < is_prefix.length; i += 1) {
            if(my_string[i] !== is_prefix[i]) return 0;
    }
    return 1;
}