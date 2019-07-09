const expect = require('expect.js');
const mergeKLists = require('./index');
const ListNode = require('../../../../src/data-structure/list-node');

describe('合并K个排序链表', () => {
  it('输入[1->4->5,1->3->4,2->6]输出1->1->2->3->4->4->5->6', () => {
    const ln1 = new ListNode(1);
    ln1.next = new ListNode(4);
    ln1.next.next = new ListNode(5);
    const ln2 = new ListNode(1);
    ln2.next = new ListNode(3);
    ln2.next.next = new ListNode(4);
    const ln3 = new ListNode(2);
    ln3.next = new ListNode(6);
    const result = mergeKLists([ln1, ln2, ln3]);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(1);
    expect(result.next.next.val).to.be(2);
    expect(result.next.next.next.val).to.be(3);
    expect(result.next.next.next.next.val).to.be(4);
  });
  it('输入[]输出空node', () => {
    const result = mergeKLists([]);
    expect(result).to.be(null);
  });
});
