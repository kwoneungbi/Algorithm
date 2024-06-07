def solution(numbers):
    a = 0;
    length = len(numbers)
    for num in numbers:
        a += num
    return a / length