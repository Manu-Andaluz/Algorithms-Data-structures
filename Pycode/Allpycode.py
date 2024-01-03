import math


def binary_search(arr, element):
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


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(binary_search(arr, 10))
print(binary_search(arr, 1))
print(binary_search(arr, 7))
print(binary_search(arr, 2))

import math


def binary_search(arr, element):
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


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

print(binary_search(arr, 10))
print(binary_search(arr, 1))
print(binary_search(arr, 7))
print(binary_search(arr, 2))

from typing import Optional


class Node:
    def __init__(self, value):
        self.value = value
        self.next: Optional["Node"] = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def EnQueue(self, item):
        node = Node(item)
        self.length += 1

        if self.tail is None:
            self.head = self.tail = node
            return
        self.tail.next = node
        self.tail = node

    # Method to remove an item from the queue
    def DeQueue(self):
        if self.head is None:
            return

        self.length -= 1
        head = self.head
        self.head = self.head.next

        if self.head is None:
            self.tail = None

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
