var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var List = require('./List.js').List;
var Customer = require('./Customer.js').Customer;

function createArr(file) {
  var arr;
  fs.readFile(file, 'utf8', function (err, contents) {
    if (err) {
      return console.log(err);
    }
console.log('Assigning arr');
    arr = contents;
    for (var i = 0; i < arr.length; ++i) {
      arr[i] = arr[i].trim();
console.log('Dealing with ' + arr[1]);
    }
  });  
  return arr;
}

function displayList(list) {
  for (list.front(); list.hasNext(); ) {
    var listItem = list.next();
    if (listItem instanceof Customer) {
      console.log(listItem.name + ", " +
        listItem.movie);
     }
    else {
      console.log(listItem);
   }
 }
}

function checkOut(name, movie, movieList, customerList) {
  if (movieList.contains(movie)) {
    var c = new Customer(name, movie);
    customerList.append(c);
    movieList.remove(movie);
  }
  else {
    console.log(movie + " is not available.");
  }
}

var movies = createArr("films.txt");
var movieList = new List();
var customers = new List();
for (var i = 0; i < movieList.length; ++i) {
 movieList.append(movies[i]);
}
console.log("Available movies: \n");
displayList(movieList);

rl.question("Enter your name: ", function(inputValue) {
  name = inputValue;
  rl.close();
});

rl.question("What movie would you like? ", function(inputValue) {
  movie = inputValue;
  rl.close();
});

checkOut(name, movie, movieList, customers);
console.log("\nCustomer Rentals: \n");
displayList(customers);
console.log("\nMovies Now Available\n");
displayList(movieList);
