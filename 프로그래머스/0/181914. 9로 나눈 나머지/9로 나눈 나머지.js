const solution = (number) => [...number].reduce((acc, curr) => acc + +curr,0) % 9;
