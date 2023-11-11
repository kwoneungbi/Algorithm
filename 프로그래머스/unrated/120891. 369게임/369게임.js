// solution #1
const solution = (order) => 
    order
    .toString()
    .split("")
    .filter((v) => v === "3" || v === "6" || v === "9").length;

// solution #2
// const solution  = (order) => {
//     const arr =  String(order).split(""); 
//     let count = 0;
//     for(let i = 0; i < arr.length; i += 1) {
//         if("369".includes(arr[i])) {
//             count += 1;
//         }
//     }
//     return count;
// } 

