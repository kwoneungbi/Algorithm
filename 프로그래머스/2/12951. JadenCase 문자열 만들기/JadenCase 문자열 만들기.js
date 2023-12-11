const solution = (s) => {
    let sSplit = s.split(" ").map(x => x.toLowerCase());
    
    return sSplit.map((x, i) => {
        let a = [...x];
        if(typeof a[0] === 'string')a[0] = a[0].toUpperCase()
        return a.join("")
    }).join(" ")
}