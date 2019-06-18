/**
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 示例
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5.
 * 说明：
 * 给定的 n 保证是有效的。
 * 进阶：
 * 你能尝试使用一趟扫描实现吗？
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const removeNthFromEnd = function(head, n) {
  if (!n) {
    return head;
  }
  let emptyHead = new ListNode(0);
  let preNode = emptyHead;
  let cursorNode = (emptyHead.next = head);
  while (n-- > 1) {
    cursorNode = cursorNode.next;
  }
  while (cursorNode.next) {
    cursorNode = cursorNode.next;
    preNode = preNode.next;
  }
  preNode.next = preNode.next.next;
  return emptyHead.next;
};

module.exports = {
  ListNode,
  removeNthFromEnd
};
