function first(word) {
  return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
console.log(acronym.join("")); // displays "fyi"
