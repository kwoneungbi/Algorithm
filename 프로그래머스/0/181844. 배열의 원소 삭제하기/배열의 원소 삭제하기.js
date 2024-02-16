// solution #1
// const solution = (arr, delete_list) => arr.filter(x => !delete_list.includes(x));

// solution #2
function solution(arr, delete_list) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += 1) {
        if (!delete_list.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}