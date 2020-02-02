const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      console.log(`\nMin: ${min}, i = ${i}, j = ${j}`);
      console.log(`\nComparing ${array[j]} to ${array[min]}`);
      if (array[j] < array[min]) {
        min = j;
      }
    }

    // console.log('\n---------------------');
    // console.log(array);
    // console.log('Swapping To:');
    // Swap
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    // console.log(array);
    // console.log('---------------------\n');
  }
  return array;
};

selectionSort([34, 22, 10, 19, 17]);
