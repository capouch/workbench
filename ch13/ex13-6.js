load('./dispArr.js');
load('./ex13-5.js');

var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
print();
print("The minimum value is: " + minValue);
