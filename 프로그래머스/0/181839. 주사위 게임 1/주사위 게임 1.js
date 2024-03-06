// solution #1
// const solution = (a, b) => {
//     const aa = a % 2;
//     const bb = b % 2;
    
//     if(aa === 1 && bb === 1) return a*a + b*b;
//     if(aa === 1 || bb === 1) return 2 * (a + b);
//     else return Math.abs(a - b);
// }

// solution #2
const solution = (a, b) => {
    const aa = a % 2 === 1;
    const bb = b % 2 === 1;

    if(aa && bb) return Math.pow(a, 2) + Math.pow(b, 2);
    if(!aa && !bb) return Math.abs(a - b);
    return 2 * (a + b);
}