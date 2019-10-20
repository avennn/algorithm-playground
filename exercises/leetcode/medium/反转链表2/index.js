/**
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 * 示例：
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 */
var reverseBetween = function(head, m, n) {
  if (head === null) {
    return null;
  }
  let cur = head;
  let prev = null;
  while (m > 1) {
    prev = cur;
    cur = cur.next;
    m--;
    n--;
  }
  let con = prev;
  let tail = cur;
  let third = null;
  while (n > 0) {
    third = cur.next;
    cur.next = prev;
    prev = cur;
    cur = third;
    n--;
  }
  if (con !== null) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = cur;
  return head;
};

module.exports = reverseBetween;
