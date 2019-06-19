const expect = require('expect.js');
const { ListNode, swapPairs } = require('./index');

describe('两两交换链表中的节点', () => {
  it('1->2->3->4交换成2->1->4->3', () => {
    const ln = new ListNode(1);
    ln.next = new ListNode(2);
    ln.next.next = new ListNode(3);
    ln.next.next.next = new ListNode(4);
    const result = swapPairs(ln);
    expect(result.val).to.be(2);
    expect(result.next.val).to.be(1);
    expect(result.next.next.val).to.be(4);
    expect(result.next.next.next.val).to.be(3);
  });
  it('1->2->3交换成2->1->3', () => {
    const ln = new ListNode(1);
    ln.next = new ListNode(2);
    ln.next.next = new ListNode(3);
    const result = swapPairs(ln);
    expect(result.val).to.be(2);
    expect(result.next.val).to.be(1);
    expect(result.next.next.val).to.be(3);
  });
  it('1->2交换成2->1', () => {
    const ln = new ListNode(1);
    ln.next = new ListNode(2);
    const result = swapPairs(ln);
    expect(result.val).to.be(2);
    expect(result.next.val).to.be(1);
  });
  it('1交换成1', () => {
    const ln = new ListNode(1);
    const result = swapPairs(ln);
    expect(result.val).to.be(1);
  });
});
