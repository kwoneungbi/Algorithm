const solution = (n) => {
    let result = 0; 
    for(let i = 0; i <= n; i += 1 ) {
        if(n % i === 0 && i % 2 === 1) result ++; // 약수이면서 홀수인 경우
    }
    return result;
} 