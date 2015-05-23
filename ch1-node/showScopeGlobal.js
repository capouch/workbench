function showScope() {
  return scope;
}
var scope = "global";
console.log(scope); // displays "global"
console.log(showScope()); // displays "global"
