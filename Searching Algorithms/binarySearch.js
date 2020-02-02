const binarySearch = (sortedArray, value) => {
  let left = 0;
  let right = sortedArray.length - 1;
  let middle = Math.ceil((left + right) / 2);

  while (sortedArray[middle] !== value && left <= right) {
    console.log(`${left} ${middle} ${right}`);
    if (sortedArray[middle] < value) {
      left = middle + 1;
    } else if (sortedArray[middle] > value) {
      right = middle - 1;
    }
    middle = Math.ceil((right + left) / 2);
  }
  if (sortedArray[middle] === value) {
    return middle;
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5], 2));
