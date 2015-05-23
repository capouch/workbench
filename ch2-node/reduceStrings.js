function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"
