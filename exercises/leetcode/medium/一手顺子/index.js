/**
 * 爱丽丝有一手(hand)由整数数组给定的牌。
 * 现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
 * 如果她可以完成分组就返回 true，否则返回 false。
 * 示例1:
 * 输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
 * 输出：true
 * 解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
 * 示例2:
 * 输入：hand = [1,2,3,4,5], W = 4
 * 输出：false
 * 解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
 */
var isNStraightHand = function(hand, W) {
  if (!hand.length || W === 0 || W > hand.length) {
    return false;
  }
  if (hand.length % W !== 0) {
    return false;
  }
  const hm = {};
  for (let i = 0; i < hand.length; i++) {
    if (hm[hand[i]] === undefined) {
      hm[hand[i]] = 1;
    } else {
      hm[hand[i]]++;
    }
  }
  const set = Object.keys(hm);
  for (let j = 0; j < set.length; j++) {
    const num = Number(set[j]);
    const startTimes = hm[num] || 0;
    if (startTimes <= 0) {
      continue;
    }
    for (let k = 0; k < W; k++) {
      const times = hm[num + k] || 0;
      if (times < startTimes) {
        return false;
      }
      hm[num + k] = times - startTimes;
    }
  }
  return true;
};

module.exports = isNStraightHand;
