// Inputs needs to be sorted
const mergeArray = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;

  // Merge both as much as you can
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // If we hit the end of array 2, then merge the rest into results
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // If we hit the end of array 1, then merge the rest into results
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
};

console.log(mergeArray([2, 5, 6, 7], [2, 99, 100, 150]));
