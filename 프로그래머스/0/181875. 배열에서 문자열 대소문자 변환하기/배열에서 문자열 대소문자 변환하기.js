// solution #1
// const solution = (strArr) => strArr.map((x, i) => i % 2 === 0 ? x.toLowerCase() : x.toUpperCase());

// solution #2
// const solution = (strArr) => {
//     const result = [];
//     for(let i = 0; i < strArr.length; i += 1) {
//         result.push(i % 2 === 0 ? strArr[i].toLowerCase() : strArr[i].toUpperCase());        
//     }
//     return result;
// } 

// solution #3
const solution = (strArr) => {
    const result = [];
    strArr.forEach((x, i) => {
        if(i % 2 == 0) result.push(x.toLowerCase());
        else result.push(x.toUpperCase());
    })
    return result;
}
