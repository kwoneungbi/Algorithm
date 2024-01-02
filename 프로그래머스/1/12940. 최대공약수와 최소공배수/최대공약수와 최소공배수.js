/*
최대 공약수 : 두 수 A와 B의 공통된 약수 중에 가장 큰 정수
최소 공배수 : 두 수 A와 B의 공통된 배수 중에 가장 작은 정수
*/

const solution = (n, m) => {
    var answer = [];
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    
    for(let i = a; i >= 1; i--) {
        if(a % i == 0 && b % i == 0) {
            return [i, (a * b / i)]
        }
    }
    return answer;
}


