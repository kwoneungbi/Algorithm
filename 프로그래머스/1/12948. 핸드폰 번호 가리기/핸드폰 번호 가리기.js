// solution #1 생각의 흐름대로 작성
// const solution = (phone_number) => {
//     const numberLength = phone_number.length;
//     const hide = phone_number.slice(0, numberLength-4)
//     return hide.replace(/[0-9]/g,"*") + phone_number.slice(numberLength-4,numberLength)
// }

// solution #2
// const solution = (phone_number) => phone_number.replace(/\d(?=\d{4})/g, "*");

// solution #3
// const solution = (phone_number) => 
// "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

// solution #4
const solution = phone_number => 
[...phone_number].fill("*",0,phone_number.length-4).join("")
