/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * 示例
 * 给定 1->2->3->4, 你应该返回 2->1->4->3.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const swapPairs = function(head) {
  // 1.非递归解法
  // if (!head || !head.next) {
  //   return head;
  // }
  // const dummy = new ListNode(0);
  // let cursor = dummy;
  // let p = head;
  // let q = p.next;
  // while (p && q) {
  //   p.next = q.next;
  //   q.next = p;
  //   cursor.next = q;
  //   cursor = p;
  //   p = p.next;
  //   q = p ? p.next : null;
  // }
  // return dummy.next;

  // 2.递归解法
  if (!head || !head.next) {
    return head;
  }
  const next = head.next;
  head.next = swapPairs(next.next);
  next.next = head;
  return next;
};

module.exports = {
  ListNode,
  swapPairs
};
