// solution #1
// const solution = (myString) => myString.split('x').map(x => x.length);

// solution #2
const solution = (myString) => {
    const nums = myString.split("x");
    const result = [];

    for (const word of nums) {
        result.push(word.length);
    }

    return result;
}