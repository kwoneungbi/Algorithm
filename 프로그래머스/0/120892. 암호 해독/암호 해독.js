// solution #1
// const solution = (cipher, code) => [...cipher].filter((x, i) => (i + 1) % code === 0).join("");

// solution #1
const solution = (cipher, code) => {
    let result = '';
    
    for(let i = code - 1; i < cipher.length; i += code) {
        result += cipher[i];
    }
    return result;
}