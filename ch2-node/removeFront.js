var nums = [9,1,2,3,4,5];
console.log(nums);
for (var i = 0; i < nums.length; ++i) {
  nums[i] = nums[i+1];
}
console.log(nums); // 1,2,3,4,5,
