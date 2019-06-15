/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 * 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
 * L   C   I   R
 * E T O E S I I G
 * E   D   H   N
 * 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
 * 请你实现这个将字符串进行指定行数变换的函数：string convert(string s, int numRows);
 * 示例1
 * 输入: s = "LEETCODEISHIRING", numRows = 3
 * 输出: "LCIRETOESIIGEDHN"
 * 示例2
 * 输入: s = "LEETCODEISHIRING", numRows = 4
 * 输出: "LDREOEIIECIHNTSG"
 * 解释:
 * L     D     R
 * E   O E   I I
 * E C   I H   N
 * T     S     G
 */
// 1
// const zConvert = function(s, numRows) {
//   // 更优解？
//   function getGapList(rowIndex) {
//     if (rowIndex === 0 || rowIndex === numRows - 1) {
//       return [gap, gap];
//     }
//     const gapRight = rowIndex * 2;
//     const gapLeft = gap - gapRight;
//     return [gapLeft, gapRight];
//   }
//   const gap = (numRows - 1) * 2 || 1;
//   const storeList = [];
//   for (let i = 0; i < numRows; i++) {
//     storeList.push({
//       gapList: getGapList(i),
//       gapIndex: 0,
//       cursor: i,
//       arr: []
//     });
//   }
//   for (let j = 0; j < s.length; j++) {
//     const store = storeList.find(item => item.cursor === j);
//     store.arr.push(s[j]);
//     store.cursor += store.gapList[store.gapIndex];
//     store.gapIndex = store.gapIndex ? 0 : 1;
//   }
//   const resultArr = storeList.reduce(
//     (preResult, curItem) => preResult.concat(curItem.arr),
//     []
//   );
//   return resultArr.join('');
// };

// 2
const zConvert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const rowArrs = [];
  for (let i = 0; i < numRows; i++) {
    rowArrs.push([]);
  }
  let curRow = 0;
  let goingDown = false;
  for (let j = 0; j < s.length; j++) {
    rowArrs[curRow].push(s[j]);
    if (curRow === 0 || curRow === numRows - 1) {
      goingDown = !goingDown;
    }
    curRow += goingDown ? 1 : -1;
  }
  const arr = rowArrs.reduce(
    (preResult, curItem) => preResult.concat(curItem),
    []
  );
  return arr.join('');
};

module.exports = zConvert;
