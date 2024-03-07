// solution #1
// const solution = (my_string, target) => +my_string.includes(target);

// solution #2
const solution = (my_string, target) => my_string.match(target) ? 1 : 0;