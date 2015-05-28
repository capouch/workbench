// This one needs to be named in the book text!!
var readline = require('readline');

// Here is the solution to the input loop problem
//var rl = readline.createInterface(process.stdin, process.stdout);
//rl.setPrompt('guess> ');
//rl.prompt();
//rl.on('line', function(line) {
//    if (line === "right") rl.close();
//    rl.prompt();
//}).on('close',function(){
//    process.exit(0);
//});

var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var HashTable = require('./BetterHash2.js').HashTable;

var pnumbers = new HashTable();
var name, number;

while (name != "finished") {
  rl.question("Enter a name (or 'finished' when done): ", function(inputValue) {
    name = inputValue;
    rl.question("Enter a number: ", function(inputValue) {
      number = inputValue;
      pnumbers.put(name, number);
      }); 
  }); 
  if(name == "finished") {
    break;
  }
}
rl.close();

name = "";
while (name != "quit") {
  rl.question("Name for number (Enter quit to stop): ", function(inputValue) {
    name = readline();
  });
  if (name == "quit") {
    break;
  }
    console.log(name + "'s number is " + pnumbers.get(name));
}h
rl.close();
