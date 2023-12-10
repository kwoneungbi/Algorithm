// solution #1
// const solution = (str) => {
//     const string = str.split(" ").map(x => +x)
//     return `${Math.min(...string)} ${Math.max(...string)}`
// }

// solution #2
const solution = (str) => {
    const strSort = str.split(" ").sort((a,b) => a - b);
    return `${strSort[0]} ${strSort.at(-1)}`
}
