isPalindrome('awesome'); // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
function isPalindrome(word) {
  // add whatever parameters you deem necessary - good luck!
  let reverseWord = '';

  function reverse(word) {
    if (word.length <= 1) return word;
    console.log(word.length - 1);
    reverseWord =
      word.charAt(word.length - 1) +
      reverse(word.substring(0, word.length - 1));
    return reverseWord;
  }

  reverse(word);

  console.log(reverseWord);
  if (word === reverseWord) return true;
  return false;
}
