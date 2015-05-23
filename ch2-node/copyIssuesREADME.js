// NOTE: fix book listing for this code!!
var test = [[1,2,3],[4,5,8],10];
var test2 = [];
for (var i = 0; i < test.length; i++) {
  test2[i] = test[i];
}
test[1][2] = 6;
test[2] = 20;
console.log(test2);
