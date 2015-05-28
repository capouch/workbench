// This one needs to be named in the book text!!
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var HashTable = require('./BetterHash2.js').HashTable;

var pnumbers = new HashTable();
var name, number;
var nameInput = true
var inputPhase = true;

// Node's ascync I/O vastly complicates this code!!
rl.setPrompt("Enter a name ('finished' when done):  ");
rl.prompt();
rl.on('line', function(line) {
  // All done with both loops
  if (!inputPhase && line === 'quit')
    rl.close();
  // All done with input, now do output loop
  if (inputPhase && nameInput  && line === 'finished') {
    inputPhase = false;
    name = "";
  } 

  // Three possibilities here:
  // 1. First entry in input loop
  if (nameInput && inputPhase )
    name = line;
  else {
    // 2. Second entry in input loop
    if (!nameInput  && inputPhase) {
    number = line;
    pnumbers.put(name,number);
  } else {
    // 3. Output phase
    name = line;
    console.log(name + "'s number is " + pnumbers.get(name));
    }
  } 

  // Set proper prompt 
  if (nameInput && inputPhase)
    rl.setPrompt('Enter a number: ');
  else if (!nameInput && inputPhase)
    rl.setPrompt("Enter a name ('finished' when done): ");
  else
    rl.setPrompt("Enter a name to look up ('quit' when done): ");

  // Toggle cycle (on inputPhase == true) and go again
  nameInput = (nameInput && inputPhase)?false:true;
  rl.prompt();
}).on('close',function(){
  process.exit(0);
});

