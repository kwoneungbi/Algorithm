const solution = (my_string, s, e) => {
    let result = '';
    const str = my_string.substring(s, e+1);
    const newStr = str.split('').reverse().join('');

    result = my_string.replace(str, newStr);
    return result;
}