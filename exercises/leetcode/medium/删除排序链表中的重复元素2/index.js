/**
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中没有重复出现的数字。
 * 示例1：
 * 输入: 1->2->3->3->4->4->5
 * 输出: 1->2->5
 * 示例2:
 * 输入: 1->1->1->2->3
 * 输出: 2->3
 */
const ListNode = require('../../../../src/data-structure/list-node');

var deleteDuplicates = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy.next;
  while (fast) {
    while (fast.next && fast.next.val === fast.val) {
      fast = fast.next;
    }
    if (slow.next === fast) {
      slow = slow.next;
    } else {
      slow.next = fast.next;
    }
    fast = fast.next;
  }
  slow.next = fast;
  return dummy.next;
};

module.exports = deleteDuplicates;
