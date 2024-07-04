def solution(a, b):
    add = 0;
    if(a > b):
        for x in range(b, a+1):
            add += x
    else:
        for x in range(a, b+1):
            add += x
    return add;