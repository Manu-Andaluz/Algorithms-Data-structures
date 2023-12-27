def bubble_sort(array):
    iterateLength = len(array) - 1

    while iterateLength > 0:
        index = 0
        for _ in range(iterateLength):
            if array[index] > array[index + 1]:
                x = array[index]
                array[index] = array[index + 1]
                array[index + 1] = x
            index += 1
        iterateLength -= 1

    return array


bubble_sort([9, 2, 7, 5, 1])
bubble_sort([11, 5, 2, 9, 8, 55, 1])
