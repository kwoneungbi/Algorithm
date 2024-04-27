const solution = (a, b, n) => {
    let answer = 0;
    let result = n;

    while (true) {
        if (a > result) {
            break;
        }
        answer += parseInt(result / a) * b;
        result = parseInt(result / a) * b + result % a
    }
    return answer;
}