/**
 * 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 * 示例1:输入: 1->2->3->4->5->NULL, k = 2
 * 输出: 4->5->1->2->3->NULL
 * 解释:
 * 向右旋转 1 步: 5->1->2->3->4->NULL
 * 向右旋转 2 步: 4->5->1->2->3->NULL
 * 输入: 0->1->2->NULL, k = 4
 * 输出: 2->0->1->NULL
 * 解释:
 * 向右旋转 1 步: 2->0->1->NULL
 * 向右旋转 2 步: 1->2->0->NULL
 * 向右旋转 3 步: 0->1->2->NULL
 * 向右旋转 4 步: 2->0->1->NULL
 */
var rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head;
  }
  // close the linked list into the ring
  let oldTail = head;
  let n;
  for (n = 1; oldTail.next != null; n++) {
    oldTail = oldTail.next;
  }
  oldTail.next = head;

  // find new tail : (n - k % n - 1)th node
  // and new head : (n - k % n)th node
  let newTail = head;
  for (let i = 0; i < n - (k % n) - 1; i++) {
    newTail = newTail.next;
  }

  const newHead = newTail.next;
  // break the ring
  newTail.next = null;

  return newHead;
};

module.exports = rotateRight;
