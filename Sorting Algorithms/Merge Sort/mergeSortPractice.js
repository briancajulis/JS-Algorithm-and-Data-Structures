// Pratice writing Merge Sort;
// Helper Function
const mergeArrays = (array1, array2) => {
  let result = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      result.push(array1[index1]);
      index1++;
    } else {
      result.push(array2[index2]);
      index2++;
    }
  }

  while (index1 < array1.length) {
    result.push(array1[index1]);
    index1++;
  }

  while (index2 < array2.length) {
    result.push(array2[index2]);
    index2++;
  }

  return result;
};

const mergeSort = array => {
  if (array.length <= 1) return array;
  let middle = Math.ceil(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return mergeArrays(left, right);
};

console.log(mergeSort([100, 23, 1114, 2, 5, 2, 555, 24, 53, 33]));
