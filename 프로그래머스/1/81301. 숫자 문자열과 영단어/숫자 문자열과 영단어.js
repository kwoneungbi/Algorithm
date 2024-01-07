const solution = s => {
    const numberEng = ['zero', 'one', 'two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = "";
    let eng = "";
    [...s].map(x => { 
        Number(x) || x === "0" ? result += x : eng += x;
        for(let y of numberEng) {
            if(y === eng) {
                result += String(numberEng.indexOf(eng));
                eng = "";
            }
        }
    });
    return Number(result);
}