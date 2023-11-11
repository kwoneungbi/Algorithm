const solution = (n) => {
    let num = 0
    for(let a = 1; a <= n; a++) {
        if(n % a === 0) {
            num +=a;
        }
    }
    return num;
}
