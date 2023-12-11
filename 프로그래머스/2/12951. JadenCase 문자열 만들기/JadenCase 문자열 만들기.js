// solution #1
const solution = (s) => {
    let sSplit = s.split(" ").map(x => x.toLowerCase());
    
    return sSplit.map(x => {
        let a = [...x];
        if(typeof a[0] === 'string')a[0] = a[0].toUpperCase();
        return a.join("");
    }).join(" ")
}

// solution #2
// const solution = (s) => {
//     const answer = [];

//     s = s.split(' ');
//     for(var i=0; i<s.length; i++) {
//         answer.push(s[i].substr(0,1).toUpperCase() + s[i].substr(1,s[i].length).toLowerCase());
//     }
//     return answer.join(' ');
// }