// solution #1
const solution = (strArr) => strArr.filter(x => !x.includes("ad"))


// solution #2
// const solution = (strArr) => {
//     const answer = []
//     strArr.forEach((a) => {
//         a.includes("ad") ? a : answer.push(a)
//     }) 
//     return answer;
// }