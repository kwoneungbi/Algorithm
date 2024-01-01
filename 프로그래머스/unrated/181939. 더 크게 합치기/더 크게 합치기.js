const solution = (a, b) => {
    const strA = String(a);
    const strB = String(b);
    
    return +(strA + strB) > +(strB + strA) ? +(strA + strB) : +(strB + strA);
}