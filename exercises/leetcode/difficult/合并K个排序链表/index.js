/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 示例
 * 输入:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 */
const ListNode = require('../../../../src/data-structure/list-node');

const mergeKLists = function(lists) {
  function mergeTwoList(listNodes, i, j) {
    const ln1 = listNodes[i];
    const ln2 = listNodes[j];
    listNodes[j] = merge(ln1, ln2);
  }
  function merge(ln1, ln2) {
    let node = new ListNode(0);
    let nd = node;
    let c1 = ln1;
    let c2 = ln2;
    while (c1 && c2) {
      if (c1.val <= c2.val) {
        nd.next = c1;
        nd = nd.next;
        c1 = c1.next;
      } else {
        nd.next = c2;
        nd = nd.next;
        c2 = c2.next;
      }
    }
    if (!c1) {
      nd.next = c2;
    } else if (!c2) {
      nd.next = c1;
    }
    return node.next;
  }
  const len = lists.length;
  if (!len) {
    return null;
  }
  if (len === 1) {
    return lists[0];
  }
  for (let i = 1; i < lists.length; i++) {
    mergeTwoList(lists, i - 1, i);
  }
  return lists[len - 1];
};

module.exports = mergeKLists;
