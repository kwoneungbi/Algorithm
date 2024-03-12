const solution = (numbers) => {
    var result = [];
    for ( let i = 0; i < numbers.length; i++) {
      for ( let j = i + 1; j < numbers.length; j++) {
        let sum = numbers[i] + numbers[j];
        if( result.indexOf(sum) === -1) {
          result.push(sum);
        }
      }
    }
    result.sort(function(a,b) {
      return a - b;
    })
    return result;
}