// s를 n만큼 밀어서 시저 암호만들기
// 숫자는 1~25, 알파벳은 대소문자 구분하고, 공백도 구분.
// 1. s가 알파벳인지 숫자인지 확인하기
// 2. n만큼 민 문자열을 반환하기

// solution #1
const solution = (s, n) => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= '';

    for(let i =0; i <s.length; i++){
        let text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        let textArr = upper.includes(text) ? upper : lower;
        let index = textArr.indexOf(text) + n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}

// solution #2
// const solution = (s, n) => {
//     const lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

//     return s.split(' ').map((word) => word.split('').map((char) => {
//     if (lower.indexOf(char) > -1) return lower[(lower.indexOf(char) + n) % lower.length]
//     else if (upper.indexOf(char) > -1) return upper[(upper.indexOf(char) + n) % upper.length]
//   }).join('')).join(' ')
// }