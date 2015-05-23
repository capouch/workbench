function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"
