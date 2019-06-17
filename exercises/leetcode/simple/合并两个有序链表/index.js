/**
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.toString = function() {
  return this.next ? `${this.val}->${this.next}` : `${this.val}`;
};

const mergeTwoLists = function(l1, l2) {
  const node = new ListNode(0);
  let curNode = node;
  while (l1 || l2) {
    let val;
    if (!l1) {
      val = l2.val;
      l2 = l2.next;
    } else if (!l2) {
      val = l1.val;
      l1 = l1.next;
    } else if (l1.val <= l2.val) {
      val = l1.val;
      l1 = l1.next;
    } else {
      val = l2.val;
      l2 = l2.next;
    }
    curNode.next = new ListNode(val);
    curNode = curNode.next;
  }
  return node.next;
};

module.exports = {
  ListNode,
  mergeTwoLists
};
