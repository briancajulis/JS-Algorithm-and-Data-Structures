// Solution File
// Helper Function
const mergeArrays = (arr1, arr2) => {
  let results = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      results.push(arr1[index1]);
      index1++;
    } else {
      results.push(arr2[index2]);
      index2++;
    }
  }

  while (index1 < arr1.length) {
    results.push(arr1[index1]);
    index1++;
  }

  while (index2 < arr2.length) {
    results.push(arr2[index2]);
    index2++;
  }

  return results;
};

// Sorting Function
const mergeSort = array => {
  // Base Case
  if (array.length <= 1) return array;

  // Split array in half
  let middle = Math.ceil(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return mergeArrays(left, right);
};

console.log(mergeSort([10, 24, 76, 73, 55, 1, 2, 3, 55, 77]));
