const bubble_sort = (array: number[]) => {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const x = array[j];
        array[j] = array[j + 1];
        array[j + 1] = x;
      }
    }
  }

  return array;
};

bubble_sort([9, 1, 3, 7, 5, 2]);
