// solution #1
// const solution = (my_string) => my_string.split(" ").filter(x => x !== "");

// solution #2
const solution = (my_string) => {
    let result = [];
    let arr = my_string.split(" ");
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== ""){
            result.push(arr[i]);
        }
    }
    return result;
}
