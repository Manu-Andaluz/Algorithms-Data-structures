export const BinarySearch = (array: number[], valueToFind: number): boolean => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  do {
    const pointer = Math.floor((leftPointer + rightPointer) / 2);
    const currentValue = array[pointer];

    if (currentValue == valueToFind) {
      return true;
    } else if (currentValue > valueToFind) {
      rightPointer = pointer - 1;
    } else {
      leftPointer = pointer + 1;
    }
  } while (leftPointer <= rightPointer);

  return false;
};

BinarySearch([1, 2, 3, 4, 5], 5);
BinarySearch([1, 2, 3, 4, 5], 2);
BinarySearch([1, 2, 3, 4, 5], 3);
BinarySearch([1, 2, 3, 4, 5], 1);
