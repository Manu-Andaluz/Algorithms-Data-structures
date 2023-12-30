from typing import List


def qs(arr: List[int], low: int, high: int) -> None:
    if low >= high:
        print(arr)
        return

    pointer = partition(arr, low, high)
    qs(arr, low, pointer - 1)
    qs(arr, pointer + 1, high)


def partition(arr: List[int], low: int, high: int) -> int:
    pointer = arr[high]
    i = low
    index = low - 1

    for _ in range(i, high):
        if arr[i] <= pointer:
            index += 1
            temp = arr[i]
            arr[i] = arr[index]
            arr[index] = temp
        i += 1

    index += 1
    arr[high] = arr[index]
    arr[index] = pointer

    return index


def quick_sort(arr: List[int]) -> None:
    qs(arr, 0, len(arr) - 1)


quick_sort([9, 3, 7, 4, 69, 420, 42])
quick_sort([9, 99, 4, 1, 3, 8])
# quick_sort([9, 3, 7, 4, 69, 420, 42])
