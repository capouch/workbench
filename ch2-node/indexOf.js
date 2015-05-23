var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a name to search for: ", function(answer) {
  var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
  var name = answer;
  var position = names.indexOf(name);
  if (position >= 0) {
    console.log("Found " + name + " at position " + position);
  }
  else {
    console.log(name + " not found in array.");
  }
rl.close();
});

