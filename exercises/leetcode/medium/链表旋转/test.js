const expect = require('expect.js');
const rotateRight = require('./index');
const ListNode = require('../../../../src/data-structure/list-node');

describe('链表旋转', () => {
  it('输入: 1->2->3->4->5->NULL, k = 2, 输出: 4->5->1->2->3->NULL', () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(4);
    node.next.next.next.next = new ListNode(5);
    const result = rotateRight(node, 2);
    expect(result.val).to.be(4);
    expect(result.next.val).to.be(5);
  });
  it('输入: 0->1->2->NULL, k = 4, 输出: 2->0->1->NULL', () => {
    const node = new ListNode(0);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    const result = rotateRight(node, 4);
    expect(result.val).to.be(2);
    expect(result.next.val).to.be(0);
  });
});
