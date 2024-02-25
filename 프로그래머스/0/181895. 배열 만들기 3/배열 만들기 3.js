// solution #1
// const solution = (arr, intervals) => intervals.map(([a, b]) => arr.slice(a, b+1)).flat();

// solution #2
const solution = (arr, intervals) => {
    const [[a,b],[c,d]] = intervals;

    return [...arr.slice(a, b+1), ...arr.slice(c, d+1)];
}