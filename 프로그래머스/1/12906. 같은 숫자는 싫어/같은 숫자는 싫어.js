// arr은 0~9까지의 원소로 이루어져있다.
// 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 한다.

const solution = (arr) => arr.filter((x,i)=> x !== arr[i+1])
