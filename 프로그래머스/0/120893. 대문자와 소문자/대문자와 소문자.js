// solution #1
// const solution = (my_string) => [...my_string].map(x => /[a-z]/.test(x) ? x.toUpperCase() : x.toLowerCase()).join("");

// solution #2
// const solution = (my_string) => [...my_string].map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join("");

// solution #3
const solution = (my_string) => {
    let result = ''
    for(let i of my_string){
        if(i === i.toUpperCase()){
            result += i.toLowerCase();
        }else{
            result += i.toUpperCase();
        }
    }
    return result;
}