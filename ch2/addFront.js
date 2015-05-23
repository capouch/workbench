var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
 nums[i] = nums[i-1];
}
nums[0] = newnum;
print(nums); // 1,2,3,4,5
