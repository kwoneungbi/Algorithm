const solution = (a, b) => {
    if(a === b) return a;
    let result = 0;
    if(a - b < 0) {
        for(let i = a; i <= b; i += 1) {
            result += i;
        }
    }
    if(a - b > 0) {
        for(let i = a; i >= b; i -= 1) {
            result += i;
        }
    }
    return result;
}