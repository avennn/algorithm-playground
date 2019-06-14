/**
 * 给出两个非空的链表用来表示两个非负的整数。其中，它们各自的位数是按照逆序的方式存储的，并且它们的每个节点只能存储一位数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字0之外，这两个数都不会以0开头。
 * ===================
 * 示例：
 * 输入：(2 - > 4 - > 3) + (5 - > 6 - > 4)
 * 输出： 7 - > 0 - > 8
 * 原因： 342 + 465 = 807
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  let carrier = 0;
  const nodeHead = new ListNode(0);
  let cur = nodeHead;
  let p1 = l1;
  let p2 = l2;
  while (p1 || p2) {
    const v1 = p1 && p1.val ? p1.val : 0;
    const v2 = p2 && p2.val ? p2.val : 0;
    const sum = v1 + v2 + carrier;
    carrier = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    if (p1) {
      p1 = p1.next;
    }
    if (p2) {
      p2 = p2.next;
    }
  }
  if (carrier > 0) {
    cur.next = new ListNode(carrier);
  }
  return nodeHead.next;
};

module.exports = {
  ListNode,
  addTwoNumbers
};
