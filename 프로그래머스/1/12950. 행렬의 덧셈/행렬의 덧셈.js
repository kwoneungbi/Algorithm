// arr1 과 arr2를 더해주는데 이때 같은 뎁스끼리 더해주기

const solution = (arr1, arr2) => arr1.map((a, i)=> a.map((b, j) => b + arr2[i][j]))