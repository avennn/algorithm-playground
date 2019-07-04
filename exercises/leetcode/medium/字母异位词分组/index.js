/**
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 示例
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * 说明：
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 */
const groupAnagrams = function(strs) {
  function getKeyFromStr(str) {
    const arr = Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
      const index = str.charCodeAt(i) - 97;
      arr[index] += 1;
    }
    return arr.join(',');
  }
  const m = {};
  for (let i = 0; i < strs.length; i++) {
    const key = getKeyFromStr(strs[i]);
    if (!m[key]) {
      m[key] = [];
    }
    m[key].push(strs[i]);
  }
  return Object.values(m);
};

module.exports = groupAnagrams;
