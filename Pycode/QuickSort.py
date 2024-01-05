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


def quick_sort(arr: List[int]) -> List[int]:
    qs(arr, 0, len(arr) - 1)
    print('last', arr)
    return arr


#quick_sort([9, 3, 7, 4, 69, 420, 42])
#quick_sort([9, 99, 4, 1, 3, 8])
# quick_sort([9, 3, 7, 4, 69, 420, 42])
#
import unittest

class TestListMethod(unittest.TestCase):
    def test_doubly_linked_list(self):
        list = [9, 3, 7, 4, 69, 420, 42]
        order_list = quick_sort(list)
        self.assertEqual(order_list,[3,4,7,9,42,69,420])


if __name__ == '__main__':
    unittest.main()
