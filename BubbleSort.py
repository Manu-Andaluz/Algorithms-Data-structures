def bubble_sort(array): 
    iterateLength = len(array) - 1
    
    while(iterateLength > 0):
        index = 0
        for item in range(iterateLength):
            print(range(iterateLength))
            if array[index] > array[index + 1]:
                x = array[index]
                array[index] = array[index + 1]
                array[index + 1] = x
            index += 1   
        iterateLength -= 1

    print(array)
    return array

bubble_sort([9,2,7,5,1])
