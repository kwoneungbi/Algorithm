// solution #1
const solution = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    
    return +(strA + strB) > +(strB + strA) ? +(strA + strB) : +(strB + strA);
}

// solution #2
// const solution = (a, b) => Math.max(Number(`${a}${b}`), Number(`${b}${a}`));

// solution #3
// const solution = (a, b) => {
//     let num1 = parseInt(""+a+b);
//     let num2 = parseInt(""+b+a);
    
//     return num1 >= num2 ? num1 : num2;
// }