// solution #1
const solution = sizes => {
    const sort = sizes.map(([x, y]) => x < y ? [y, x] : [x, y]);
    
    let maxSize = [0, 0];
    sort.forEach(([x, y]) => {
        if(x > maxSize[0]) maxSize[0] = x;
        if(y > maxSize[1]) maxSize[1] = y;
    })
    return maxSize[0] * maxSize[1];
}

// solution #2
// const solution = (sizes) => {
//     let w = 0;
//     let h = 0;
//     sizes.forEach(s => {
//         const [a, b] = s.sort((a,b) => a-b);
//         if (a > h) h = a;
//         if (b > w) w = b;
//     });

//     return w * h;
// }

// solution #3
// const solution = (sizes) => Math.max(...sizes.map(x => Math.max(x[0], x[1]))) * Math.max(...sizes.map(x => Math.min(x[0], x[1])));