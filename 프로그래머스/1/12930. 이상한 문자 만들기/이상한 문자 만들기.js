// solution #1
const solution = (s) => 
    s.split(" ").map(x => x.split("").map((y, i) => i % 2 ? y.toLowerCase() : y.toUpperCase() ).join("")).join(" ")

// solution #2
// const solution = (s) => {
//   var result = "";

//   for(var word of s.split(" ")) {
//     for(var i in word) {
//       result += word[i][parseInt(i) % 2 == 0 ? "toUpperCase" : "toLowerCase"]();
//     }
//     result += " ";
//   };

//   return result.slice(0, -1);
// }
