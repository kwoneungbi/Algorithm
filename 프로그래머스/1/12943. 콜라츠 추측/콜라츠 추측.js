// solution #1
// num이 짝수라면 num / 2
// num이 홀수라면 num * 3 + 1
// 1이 될때 까지 반복하기, 500번 반복할때까지 1이 안되면 -1 반환하기

const solution = (num) => {
    let count = 0;
    for(let j = 0; j < 500; j +=1) {
        if(num === 1) break;
        num = num % 2 ? num * 3 + 1 : num / 2;
        count += 1;
    }
    return num === 1 ? count : -1;  
}