const expect = require('expect.js');
const { ListNode, mergeTwoLists } = require('./index');

describe('合并两个有序链表', () => {
  it('1->2->4, 1->3->4合并成1->1->2->3->4->4', () => {
    const l1 = new ListNode(1);
    l1.next = new ListNode(2);
    l1.next.next = new ListNode(4);
    const l2 = new ListNode(1);
    l2.next = new ListNode(3);
    l2.next.next = new ListNode(4);
    const result = mergeTwoLists(l1, l2);
    expect(result.toString()).to.be('1->1->2->3->4->4');
  });
});
