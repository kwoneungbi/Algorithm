// solution #1
// const solution = (my_strings, parts) => parts.map(([x,y], idx) => my_strings[idx].slice(x, y+1)).join("");

// solution #2
const solution = (my_strings, parts) => {
    let result = '';
    parts.forEach((part, i)=>{
        const [s,e] = part;
        result += my_strings[i].slice(s,e+1);
    })
    return result;
}