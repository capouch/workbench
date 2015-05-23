function concat(accumulatedString, item) {
 return accumulatedString + item;
}
var words = ["the ", "quick ","brown ", "fox "];
var sentence = words.reduce(concat);
print(sentence); // displays "the quick brown fox"
