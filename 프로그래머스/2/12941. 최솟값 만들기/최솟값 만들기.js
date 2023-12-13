const solution = (A, B) => {
    const sortA = A.sort((a, b) => a - b); // [1,2,4,5]
    const sortB = B.sort((a, b) => b - a); // [5,3,2]
    
    return sortA.reduce((acc, curr, i) => acc + curr * sortB[i], 0);
}
    