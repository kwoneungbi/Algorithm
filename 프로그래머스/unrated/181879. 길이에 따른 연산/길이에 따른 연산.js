// solution #1
const solution = (num_list) => 
    num_list.length>=11 ? 
    num_list.reduce((sum,x)=>sum+x) : num_list.reduce((sum,x)=>sum*x);


// solution #1_refectoring
// const solution = (num_list) => 
//     num_list.reduce((a,v) => num_list.length > 10 ? a + v : a * v);


// solution #2
// const solution = (num_list) => {
//     if(num_list.length >= 11){
//         let result = 0;
//         for(let i = 0; i<num_list.length; i++){
//             result += num_list[i];
//         }
//         return result;
//     }else{
//         let result = 1;
//         for(let i = 0; i<num_list.length; i++){
//             result *= num_list[i];
//         }
//         return result;
//     }
// }