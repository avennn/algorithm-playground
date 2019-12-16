/**
 * 在无限的平面上，机器人最初位于(0, 0)处，面朝北方。机器人可以接受下列三条指令之一：
 * "G"：直走 1 个单位
 * "L"：左转 90 度
 * "R"：右转 90 度
 * 机器人按顺序执行指令instructions，并一直重复它们。
 * 只有在平面中存在环使得机器人永远无法离开时，返回true。否则，返回 false。
 * 示例1:
 * 输入："GGLLGG"
 * 输出：true
 * 解释：
 * 机器人从 (0,0) 移动到 (0,2)，转 180 度，然后回到 (0,0)。
 * 重复这些指令，机器人将保持在以原点为中心，2 为半径的环中进行移动
 * 示例2:
 * 输入："GG"
 * 输出：false
 * 解释：
 * 机器人无限向北移动。
 * 示例3:
 * 输入："GL"
 * 输出：true
 * 解释：
 * 机器人按 (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ... 进行移动。
 * 提示：
 * 1 <= instructions.length <= 100
 * instructions[i] 在 {'G', 'L', 'R'} 中
 */
var isRobotBounded = function(instructions) {
  let dir = 0;
  let x = 0;
  let y = 0;
  for (let i = 0; i < instructions.length; i++) {
    const instruct = instructions[i];
    changeDir(instruct);
    if (instruct === 'G') {
      switch (dir) {
        case 0:
          y++;
          break;
        case 1:
          x++;
          break;
        case 2:
          y--;
          break;
        case 3:
          x--;
          break;
      }
    }
  }
  if (dir !== 0 || (x === 0 && y === 0)) {
    return true;
  }
  return false;

  function changeDir(d) {
    if (d === 'L') {
      dir = --dir % 4;
      if (dir < 0) {
        dir += 4;
      }
    }
    if (d === 'R') {
      dir = ++dir % 4;
    }
  }
};

module.exports = isRobotBounded;
