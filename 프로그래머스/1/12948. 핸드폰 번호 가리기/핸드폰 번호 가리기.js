const solution = (phone_number) => {
    const numberLength = phone_number.length;
    const a = phone_number.slice(0, numberLength-4)
    return a.replace(/[0-9]/g,"*") + phone_number.slice(numberLength-4,numberLength)
}


