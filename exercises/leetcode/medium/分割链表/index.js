/**
 * 给定一个链表和一个特定值 x，对链表进行分隔
 * 使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 示例：
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
 */
const ListNode = require('../../../../src/data-structure/list-node');

var partition = function(head, x) {
  if (head === null || head.next === null) {
    return head;
  }
  let beforeHead = new ListNode();
  let before = beforeHead;
  let afterHead = new ListNode();
  let after = afterHead;
  while (head) {
    if (head.val < x) {
      before.next = head;
      before = before.next;
    } else {
      after.next = head;
      after = after.next;
    }
    head = head.next;
  }
  after.next = null;
  before.next = afterHead.next;
  return beforeHead.next;
};

module.exports = partition;
