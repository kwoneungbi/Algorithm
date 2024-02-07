// solution #1
const solution = (n, numlist) => numlist.filter(x => x % n === 0);

// solution #2
// const solution = (n, numlist) =>  {
//     const answer = [];

//     for (let i =0; i<= numlist.length; i++) {
//       if(numlist[i] % n === 0) {
//         answer.push(numlist[i]);
//       }
//     }
//     return answer;
// }

// solution #3 
// const solution = (n, numlist) => {
//     const answer = [];
    
//     for(let i of numlist){
//         if(i % n === 0) answer.push(i);
//     }
//     return answer;
// }