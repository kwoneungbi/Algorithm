// count번째 이용하면 price * count로 금액 받기
// count번 탔을때 money에서 얼마 모자라는지 리턴, 부족하지 않다면 0 리턴

const solution = (price, money, count) => {
    const result = money - Array(count).fill(0).map((x, i)=> (i + 1) * price).reduce((acc, curr) => acc + curr,0)
    return result <= 0 ? Math.abs(result) : 0;
} 