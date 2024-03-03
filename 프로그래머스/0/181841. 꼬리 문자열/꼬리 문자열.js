// solution #1
// const solution = (str_list, ex) => str_list.filter(x => !x.includes(ex)).join("");

// solution #2
const solution = (str_list, ex) => {
    var answer = '';
    let arr = []
    for(x of str_list){
        if(!x.includes(ex)){
            arr.push(x)
        }
    }
    return arr.join('');
}