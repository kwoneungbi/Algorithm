// solution #1
// const solution = (str1, str2) => [...str1].map((x, i) => `${x}${[...str2][i]}`).join("");

// solution #2
const solution = (str1, str2) => {
    let result="";
    
    for(let i = 0 ; i < str1.length ; i++)
        result+= str1[i]+str2[i];

    return result;
}
