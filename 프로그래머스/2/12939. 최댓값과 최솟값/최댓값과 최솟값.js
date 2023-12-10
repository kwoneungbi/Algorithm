const solution = (str) => {
    const string = str.split(" ").map(x => +x)
    return `${Math.min(...string)} ${Math.max(...string)}`
}