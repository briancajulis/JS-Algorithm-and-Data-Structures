const reverse = word => {
  if (word.length <= 1) return word.charAt(0);
  console.log(word.substring(0, word.length - 1));
  return (
    word.charAt(word.length - 1) + reverse(word.substring(0, word.length - 1))
  );
};

console.log(reverse('awesome'));
