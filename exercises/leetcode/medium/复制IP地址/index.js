/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 示例：
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 */
var restoreIpAddresses = function(s) {
  let arr = [];
  let n = s.length;
  let tmp = [];
  backTrack(-1, 3);
  return arr;
  function isValid(seg) {
    const m = seg.length;
    if (m > 3) {
      return false;
    }
    return seg.charAt(0) !== '0' ? Number(seg) <= 255 : m === 1;
  }
  function updateOutput(curPos) {
    const seg = s.substring(curPos + 1, n);
    if (isValid(seg)) {
      tmp.push(seg);
      arr.push(tmp.join('.'));
      tmp.pop();
    }
  }

  function backTrack(prevPos, dots) {
    const maxPos = Math.min(n - 1, prevPos + 4);
    for (let curPos = prevPos + 1; curPos < maxPos; curPos++) {
      const seg = s.substring(prevPos + 1, curPos + 1);
      if (isValid(seg)) {
        tmp.push(seg);
        if (dots - 1 === 0) {
          updateOutput(curPos);
        } else {
          backTrack(curPos, dots - 1);
        }
        tmp.pop();
      }
    }
  }
};

module.exports = restoreIpAddresses;
