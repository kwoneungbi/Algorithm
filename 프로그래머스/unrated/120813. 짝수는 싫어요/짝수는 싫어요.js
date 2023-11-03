// solution #1
const solution = (n) => {
    let arr = [];
    for(let i = n; i > 0; i-=1) {
        if(i % 2 === 1) {
            arr.push(i);
        }
    }
    return arr.reverse();
}

// solution #2
// const solution = (n) =>  Array(n).fill(1).map((v, i)=> v + i).filter(v => v % 2 === 1);