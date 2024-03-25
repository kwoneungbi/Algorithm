// solution #1
// const solution = (number) => [...number].reduce((acc, curr) => acc + +curr,0) % 9;

// solution #2
const solution = (number) => {
    let result = 0;

    for(let i of number){
        result += Number(i);
    }
    return result % 9;
}