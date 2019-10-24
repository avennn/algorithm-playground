/**
 * 给一非空的单词列表，返回前 k 个出现次数最多的单词。
 * 返回的答案应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
 * 示例1:
 * 输入: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * 输出: ["i", "love"]
 * 解析: "i" 和 "love" 为出现次数最多的两个单词，均为2次。
 * 注意，按字母顺序 "i" 在 "love" 之前。
 * 示例2:
 * 输入: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * 输出: ["the", "is", "sunny", "day"]
 * 解析: "the", "is", "sunny" 和 "day" 是出现次数最多的四个单词，
 * 出现次数依次为 4, 3, 2 和 1 次。
 * 注意：
 * 假定 k 总为有效值， 1 ≤ k ≤ 集合元素数。
 * 输入的单词均由小写字母组成。
 * 扩展练习：
 * 尝试以 O(n log k) 时间复杂度和 O(n) 空间复杂度解决。
 */
var topKFrequent = function(words, k) {
  for (let i = words.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (words[j] > words[j + 1]) {
        [words[j], words[j + 1]] = [words[j + 1], words[j]];
      }
    }
  }
  let record = {};
  for (let i = 0; i < words.length; i++) {
    const key = words[i];
    if (!record[key]) {
      record[key] = {
        count: 1,
        value: key
      };
    } else {
      record[key].count += 1;
    }
  }
  const arr = Object.values(record);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j].count > arr[j - 1].count) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr.splice(0, k).map(item => item.value);
};

module.exports = topKFrequent;
