// Returns the index of where the first odd num array is located
const firstOddInArray = arrayNum => {
  let index = 0;
  console.log(arrayNum);
  if (arrayNum[0] % 2 !== 0) return index;
  arrayNum.shift();
  return index + 1 + firstOddInArray(arrayNum);
};

console.log(firstOddInArray([1234, 2222, 1223]));
