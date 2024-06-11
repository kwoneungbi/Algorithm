# def solution(array, height):
#     result = 0
#     for x in array:
#         if x > height:
#             result += 1
#     return result

def solution(array, height):
    return sum(1 for x in array if x > height)
    
    