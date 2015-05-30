// This one needs to be named in the book text!!
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HashTable = require('./BetterHash2.js').HashTable;

var pnumbers = new HashTable();
var name, number;

// Variables used for asynch input control
// In "input phase," alternate between name and number input
var nameInput = true

// During output phase we look up names and print their numbers
var inputPhase = true;

// Node's ascync I/O vastly complicates this code!!
rl.setPrompt("Enter a name ('finished' when done):  ");
rl.prompt();
rl.on('line', function(line) {

  // First check if the user is finished ('finished' or 'quit'):
  // All done with both loops
  if (!inputPhase && line === 'quit')
    rl.close();

  // All done with input, now do output loop
  if (inputPhase && nameInput  && line === 'finished') {
    // Switch to output phase
    inputPhase = false;
    name = "";
  } 

  // If not finished, then process input value.  Three possibilities:
  // 1. First (name) entry in input loop
  if (nameInput && inputPhase )
    name = line;
  else {
    // 2. Second entry (number) in input loop
    if (!nameInput  && inputPhase) {
    number = line;
    pnumbers.put(name,number);
  } else {
    // 3. Output phase
    name = line;
    console.log(name + "'s number is " + pnumbers.get(name));
    }
  } 

  // Finally, set proper prompt for next iteration
  if (nameInput && inputPhase)
    rl.setPrompt('Enter a number: ');
  else if (!nameInput && inputPhase)
    rl.setPrompt("Enter a name ('finished' when done): ");
  else
    rl.setPrompt("Enter a name to look up ('quit' when done): ");

  // Toggle phase cycle (on inputPhase == true) and go again
  nameInput = (inputPhase && nameInput)?false:true;

  // Next iteration
  rl.prompt();

// All finished
}).on('close',function(){
  process.exit(0);
});

