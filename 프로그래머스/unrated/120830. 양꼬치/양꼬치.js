// solution #1
const solution = (n, k) => n * 12000 + ((k - ~~(n / 10)) * 2000);

// solution #2
// const solution = (n, k) => {
//     let ramb = n * 12000;
//     let drink = k * 2000;
//     return ramb+drink - parseInt(n / 10) * 2000;
// }