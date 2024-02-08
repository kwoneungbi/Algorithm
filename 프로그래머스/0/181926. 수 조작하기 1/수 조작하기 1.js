const solution = (n, control) => {
    const obj = {w: 1, s: -1, d: 10, a: -10}
    
    return control.split("").reduce((acc, curr) => acc + obj[curr], n);
}