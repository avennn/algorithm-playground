const expect = require('expect.js');
const reverseBetween = require('./index');
const ListNode = require('../../../../src/data-structure/list-node');

describe('反转链表2', () => {
  it('输入1->2->3->4->5->NULL, m = 2, n = 4，输出1->4->3->2->5->NULL', () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);
    const result = reverseBetween(node, 2, 4);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(4);
    expect(result.next.next.val).to.be(3);
    expect(result.next.next.next.val).to.be(2);
    expect(result.next.next.next.next.val).to.be(5);
  });
});
