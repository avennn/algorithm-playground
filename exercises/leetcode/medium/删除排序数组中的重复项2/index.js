/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 示例1:
 * 给定 nums = [1,1,1,2,2,3],
 * 函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
 * 你不需要考虑数组中超出新长度后面的元素。
 * 示例2:
 * 给定 nums = [0,0,1,1,1,1,2,3,3],
 * 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为0, 0, 1, 1, 2, 3, 3 。
 * 你不需要考虑数组中超出新长度后面的元素。
 */
var removeDuplicates = function(nums) {
  if (!nums.length || nums.length === 1) {
    return nums.length;
  }
  let count = 1;
  let curItem = nums[0];
  // leetcode有更好的比较方法，直接从i=2开始，比较i和i-2
  for (let i = 1; i < nums.length; ) {
    if (nums[i] === curItem) {
      if (count < 2) {
        count++;
        i++;
      } else {
        nums.splice(i, 1);
      }
    } else if (nums[i] > curItem) {
      curItem = nums[i];
      count = 1;
      i++;
    }
  }
  return nums.length;
};

module.exports = removeDuplicates;
