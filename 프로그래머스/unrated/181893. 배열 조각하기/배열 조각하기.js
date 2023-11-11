const solution = (arr, query) => {
    for (i = 0; i < query.length; i += 1) {
        if (i % 2 === 0) {
            arr.splice(query[i] + 1);
        } else arr.splice(0, query[i]);
    }
    return arr;
}

