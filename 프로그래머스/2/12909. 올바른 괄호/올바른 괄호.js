// solution #1
const solution = s => {
    let result = 0;
    const sArr = s.split("");
    
    if(sArr[0] === ")" ) return false
    sArr.map(x => {
        if(result < 0) return;
        return x === "(" ? result += 1 : result -= 1;
    })
    
    return result ? false : true
}


// solution #2
// const solution = s => { 
//     let result = 0;

//     for (let i=0; i<s.length; i++) {
//         s[i] === "(" ? result += 1 : result -= 1 
//         if (result < 0) {
//             break;
//         }
//     }
//     return result ? false : true;
// }
