const expect = require('expect.js');
const { ListNode, removeNthFromEnd } = require('./index');

describe('删除链表的倒数第N个节点', () => {
  it('1->2->3->4->5删除倒数第2个节点', () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(3);
    l1.next.next.next = new ListNode(4);
    l1.next.next.next.next = new ListNode(5);
    const result = removeNthFromEnd(l1, 2);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(2);
    expect(result.next.next.val).to.be(3);
    expect(result.next.next.next.val).to.be(5);
  });
});
