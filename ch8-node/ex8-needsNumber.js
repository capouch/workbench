// This one needs to be named in the book text!!
var readline = require('readline');


var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HashTable = require('./BetterHash2.js').HashTable;

var pnumbers = new HashTable();
var name, number;
var cycle = 1;
var inputMode = true;

// Node's ascync I/O vastly complicates this code!!
rl.setPrompt("Enter a name ('finished' when done):  ");
rl.prompt();
rl.on('line', function(line) {
  // All done with both loops
  if (inputMode == false && line === 'quit')
    rl.close();
  // All done with input, now do output loop
  if (cycle == 1 && line === 'finished' && inputMode) {
    inputMode = false;
    name = "";
  } 
  // Three possibilities here:

  // First entry in input loop
  if (cycle == 1 && inputMode )
    name = line;
  else {
    // Second entry in input loop
    if (cycle == 0 && inputMode) {
    number = line;
    pnumbers.put(name,number);
  } else {
    // Output phase
    name = line;
    console.log(name + "'s number is " + pnumbers.get(name));
    }
  } 

  // Set proper prompt 
  if (cycle == 1 && inputMode)
    rl.setPrompt('Enter a number: ');
  else if (cycle == 0 && inputMode)
    rl.setPrompt("Enter a name ('finished' when done): ");
  else
    rl.setPrompt("Enter a name to look up ('quit' when done): ");

  // Toggle cycle (on inputMode == true) and go again
  cycle = (cycle == 1 && inputMode)?0:1;
  rl.prompt();
}).on('close',function(){
  process.exit(0);
});

