function passing(num) {
  return num >= 60;
}
var grades = [];
for (var i = 0; i < 20; ++i) {
  grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades: ");
console.log(grades);
console.log("Passing grades: ");
console.log(passGrades);
