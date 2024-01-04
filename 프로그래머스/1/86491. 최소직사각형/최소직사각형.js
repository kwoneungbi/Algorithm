const solution = sizes => {
    const sort = sizes.map(([x, y]) => x < y ? [y, x] : [x, y]);
    
    let maxSize = [0, 0];
    sort.forEach(([x, y]) => {
        if(x > maxSize[0]) maxSize[0] = x;
        if(y > maxSize[1]) maxSize[1] = y;
    })
    return maxSize[0] * maxSize[1];
}
