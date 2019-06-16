/**
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 示例1
 * 给定 nums = [3,2,2,3], val = 3,
 * 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 * 示例2
 * 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
 * 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
 * 注意这五个元素可为任意顺序。
 * 你不需要考虑数组中超出新长度后面的元素。
 */
const removeElement = function(nums, val) {
  if (!nums.length) {
    // []
    return 0;
  }
  if (nums.length === 1) {
    return nums[0] === val ? 0 : 1;
  }
  let i = nums.length - 1;
  for (let j = nums.length - 2; j >= 0; j--) {
    if (nums[i] === val) {
      i--;
    } else if (nums[j] === val) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i--;
    }
  }
  return nums[0] === val ? i : i + 1;
};

module.exports = removeElement;
