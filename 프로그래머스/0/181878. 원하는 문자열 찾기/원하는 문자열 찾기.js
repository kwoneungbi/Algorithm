// solution #1
const solution = (myString, pat) => myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;


// solution #2
// const solution = (myString, pat) => myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;

// solution #3
// const solution = (myString, pat) => new RegExp(pat, 'i').test(myString) ? 1 : 0;
