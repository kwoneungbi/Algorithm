# solution 1
# def solution(array):
#     length = len(array) // 2
#     soted = sorted(array)
#     return soted[length]

# solution 2
import statistics;

def solution(array):
    return statistics.median(array)