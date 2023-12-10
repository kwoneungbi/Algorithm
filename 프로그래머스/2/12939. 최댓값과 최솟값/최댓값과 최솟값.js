// solution #1
const solution = (str) => {
    const string = str.split(" ").map(x => +x)
    return `${Math.min(...string)} ${Math.max(...string)}`
}

// solution #2
// const solution = (str) => {
//     const strSort = str.split(" ").sort((a,b) => a - b);
//     return `${strSort[0]} ${strSort.at(-1)}`
// }

// solution #3
// const solution = (str) => {
//     const strSort = str.split(" ").sort((a,b) => Number(a) - Number(b));    
//     return `${strSort[0]} ${strSort.pop()}`;
// }
