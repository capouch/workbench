function afterc(str) {
 if (str.indexOf("cie") > -1) {
 return true;
 }
 return false;
}
var words = ["recieve","deceive","percieve","deceit","concieve"];
var misspelled = words.filter(afterc);
print(misspelled); // displays recieve,percieve,concieve
