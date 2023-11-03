// version 1
const solution = (price) => 
    price >= 500000 ? Math.floor(price * 0.8) 
    : price >= 300000 ? Math.floor(price * 0.9) 
    : price >= 100000 ? Math.floor(price * 0.95) : Math.floor(price);

// version 2
// const solution = (price) => {
//     if(price >= 500000) {
//         return Math.floor(price * 0.8);
//     } else if(price >= 300000) {
//         return Math.floor(price * 0.9);
//     } else if(price >= 100000) {
//         return Math.floor(price * 0.95);
//     } else {
//         return price;
//     }
// }