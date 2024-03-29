// solution #1
// const solution = (cards1, cards2, goal) => {
//     for(const s of goal) {
//         if(cards1[0] === s) {
//             cards1.shift();
//         } else if(cards2[0] === s) {
//             cards2.shift();
//         } else {
//             return "No"
//         }
//     }
//     return "Yes";
// }

// solution 2
const solution = (cards1, cards2, goal) => {
    let firstCount = 0
    let secondCount = 0
    let result = '';

    for(let i =0; i < goal.length; i++){
        if(goal[i] === cards1[firstCount]){
            result = "Yes";
            firstCount += 1;
        }else if(goal[i] === cards2[secondCount]){
           result = "Yes"
            secondCount += 1
        }else{
            result = "No";
            break;
        }  
    }
    return result;
}
