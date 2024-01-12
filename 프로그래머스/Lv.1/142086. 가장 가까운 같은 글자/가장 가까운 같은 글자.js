const solution = s => {
    var result = [];
    
    for(let i =0 ; i< s.length ; i++){
        const before = s.slice(0,i)
        result.push(before.lastIndexOf(s[i])===-1 ? -1 : i-before.lastIndexOf(s[i]))
    }
    
    return result;
}
