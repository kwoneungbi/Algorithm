const solution = (s) => 
    s.split(" ").map(x => x.split("").map((y, i) => i % 2 ? y.toLowerCase() : y.toUpperCase() ).join("")).join(" ")

// function solution(s) {
//   return s
//     .split(" ")
//     .map((x) =>
//        x.split("")
//         .map((y, index) => (index % 2 == 0 ? y.toUpperCase() : y.toLowerCase()))
//         .join("")
//     )
//     .join(" ");
// }

