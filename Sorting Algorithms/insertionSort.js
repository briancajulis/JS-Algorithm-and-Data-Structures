const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];

    // Work backwards
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
    console.log(array);
  }

  return array;
};

insertionSort([2, 1, 9, 100, 3, 34, 55]);
