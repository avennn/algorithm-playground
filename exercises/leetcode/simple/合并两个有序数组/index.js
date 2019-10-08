/**
 * 给定两个有序整数数组nums1和nums2，将nums2合并到nums1中，使得num1成为一个有序数组。
 * 说明:
 * 初始化nums1和nums2的元素数量分别为m和n。
 * 你可以假设nums1有足够的空间（空间大小大于或等于m + n）来保存nums2中的元素。
 * 示例：
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 输出: [1,2,2,3,5,6]
 */
// 要求无返回，直接修改nums1
const merge = function(nums1, m, nums2, n) {
  let a = m;
  let b = n;
  while (a > 0 || b > 0) {
    const x = a > 0 ? nums1[a - 1] : -Infinity;
    const y = b > 0 ? nums2[b - 1] : -Infinity;
    if (x >= y) {
      a--;
      nums1[a + b] = x;
    } else {
      b--;
      nums1[a + b] = y;
    }
  }
};

module.exports = merge;
