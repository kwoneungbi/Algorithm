const solution = (arr1, arr2) => {
    const a = arr1.length;
    const b = arr2.length;
    
    if(a === b) {
        const aa = arr1.reduce((acc,curr) => acc + curr, 0);
        const bb = arr2.reduce((acc,curr) => acc + curr, 0);
        return aa === bb ? 0 : aa > bb ? 1 : -1;
    } 
    return a > b ? 1 : -1;
}
 