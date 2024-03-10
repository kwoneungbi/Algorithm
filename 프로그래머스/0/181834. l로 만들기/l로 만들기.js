const solution = (myString) => {
    const alphabet = 'abcdefghijk';
    
    return [...myString].map(x => [...alphabet].includes(x) ? 'l' : x).join("");
}