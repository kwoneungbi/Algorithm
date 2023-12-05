const solution = (d, budget) => {
    let result = 0;
    
    d.sort((a, b) => a - b);
    
    for (const item of d) {
        budget -= item;
        if (budget < 0) break;
        result++;
    }
    
    return result;
}
