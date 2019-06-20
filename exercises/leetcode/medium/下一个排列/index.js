/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 必须原地修改，只允许使用额外常数空间。
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 1231 -> 1312 -> 1321 -> 2113
 */
const nextPermutation = function(nums) {
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function reverse(arr, i) {
    let j = nums.length - 1;
    while (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j > i && nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reverse(nums, i + 1);
  return nums;
};

module.exports = nextPermutation;
