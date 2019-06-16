/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 示例1
 * 给定数组 nums = [1,1,2],
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 * 示例2
 * 给定 nums = [0,0,1,1,1,2,2,3,3,4],
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 你不需要考虑数组中超出新长度后面的元素。
 */
const removeDuplicates = function(nums) {
  // 第一次解
  // let len = nums.length;
  // if (len < 2) {
  //   return nums.length;
  // }
  // let i = 1;
  // while (i < len) {
  //   if (nums[i] === nums[i - 1]) {
  //     nums.splice(i, 1);
  //     len = nums.length;
  //   } else {
  //     i++;
  //   }
  // }
  // return nums.length;

  // 第二次解，参考官方题解
  const len = nums.length;
  if (len < 2) {
    return len;
  }
  let i = 0;
  for (let j = 1; j < len; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

module.exports = removeDuplicates;
