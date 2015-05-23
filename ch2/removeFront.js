var nums = [9,1,2,3,4,5];
print(nums);
for (var i = 0; i < nums.length; ++i) {
 nums[i] = nums[i+1];
}
print(nums); // 1,2,3,4,5,
