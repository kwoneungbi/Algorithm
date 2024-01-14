// s를 n만큼 밀어서 시저 암호만들기
// 숫자는 1~25, 알파벳은 대소문자 구분하고, 공백도 구분.
// 1. s가 알파벳인지 숫자인지 확인하기
// 2. n만큼 민 문자열을 반환하기

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