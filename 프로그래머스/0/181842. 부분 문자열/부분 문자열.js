// solution #1
// const solution = (str1, str2) => str2.includes(str1) ? 1 : 0;

// solution #2
// const solution = (str1, str2) => +str2.includes(str1);

// solution #3
// const solution = (str1, str2) => RegExp(str1).test(str2) ? 1 : 0;

// solution #4
const solution = (str1, str2) => str2.split(str1).length > 1 ? 1 : 0;