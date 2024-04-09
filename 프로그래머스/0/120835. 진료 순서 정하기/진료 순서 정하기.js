const solution = (emergency) => {
    const indexArray = emergency.map((value, index) => ({ value, index }));

    indexArray.sort((a, b) => b.value - a.value);

    const order = Array(emergency.length).fill(0);
    indexArray.forEach((item, sortedIndex) => {
        order[item.index] = sortedIndex + 1;
    });
    
    return order;  
}