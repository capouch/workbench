function showScope() {
  var scope = "local";
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "local"
