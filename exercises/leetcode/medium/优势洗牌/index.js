/**
 * 给定两个大小相等的数组A和B，A 相对于B的优势可以用满足A[i] > B[i]的索引i的数目来描述。
 * 返回A的任意排列，使其相对于B的优势最大化。
 * 示例1:
 * 输入：A = [2,7,11,15], B = [1,10,4,11]
 * 输出：[2,11,7,15]
 * 示例2:
 * 输入：A = [12,24,8,32], B = [13,25,32,11]
 * 输出：[24,32,8,12]
 */
var advantageCount = function(A, B) {
  const clonedA = [...A].sort((a, b) => a - b);
  const clonedB = [...B].sort((a, b) => a - b);
  const len = A.length;
  const result = Array(len).fill(undefined);
  let j = 0;
  let remaind = [];
  let assign = [];
  for (let i = 0; i < len; i++) {
    if (clonedA[i] > clonedB[j]) {
      assign.push([clonedB[j], clonedA[i]]);
      j++;
    } else {
      remaind.push(clonedA[i]);
    }
  }
  for (let i = 0; i < len; i++) {
    const index = assign.findIndex(item => item[0] === B[i]);
    if (index > -1) {
      result[i] = assign[index][1];
      assign.splice(index, 1);
    } else {
      result[i] = remaind.shift();
    }
  }
  return result;
};

module.exports = advantageCount;
