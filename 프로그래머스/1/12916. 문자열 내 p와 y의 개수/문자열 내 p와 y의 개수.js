// solution #1
const solution = (s) => 
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;

// solution #2
// const solution = (s) => {
//     const pLength = s.match(/p/ig)
//     const yLength = s.match(/y/ig)
//     return (pLength === null) && (yLength === null) ? true : (pLength === null) || (yLength === null) ? false : pLength.length === yLength.length
// }


// solution #3
// const solution = (s) => {
//     const sLength = s.length
//     const pCount = sLength - s.replace(/p/gi).length
//     const yCount = sLength - s.replace(/y/gi).length
//     return pCount == yCount
// }


