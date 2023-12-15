import math

def binary_search (arr,element):
    low = 0
    high = len(arr) - 1

    while low <= high:
        pointer = math.floor((low + high) / 2)
        value = arr[pointer]

        if value == element:
            return True
        elif element < value:
            high = pointer - 1
        else: 
            low = pointer + 1

    return False



arr = [1,2,3,4,5,6,7,8,9,10]

print(binary_search(arr,10))
print(binary_search(arr,1))
print(binary_search(arr,7))
print(binary_search(arr,2))
