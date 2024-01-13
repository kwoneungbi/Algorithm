// solution #1
const solution = s => {
    var result = [];
    
    for(let i =0 ; i< s.length ; i++){
        const before = s.slice(0,i)
        result.push(before.lastIndexOf(s[i])===-1 ? -1 : i-before.lastIndexOf(s[i]))
    }
    
    return result;
}

// solution #2
// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });

// const solution = s => {
//     const result = [];
//     return [...s].map(x => result.includes(x) ? result.lastIndexOf(x) : -1 && result.push(x))
// }
