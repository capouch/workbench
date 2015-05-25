load("stack.js");

var myStack = new Stack();
myStack.push(2);
myStack.push(4);
myStack.push(6);
myStack.push(8);
myStack.push(10);
var runtotal = 0;
var prev =  myStack.length();
for( var i = 0; i < prev; ++i)
  runtotal += myStack.pop();
print(runtotal);	
