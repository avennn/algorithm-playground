const expect = require('expect.js');
const partition = require('./index');
const ListNode = require('../../../../src/data-structure/list-node');

describe('分割列表', () => {
  it('输入head=1->4->3->2->5->2, x=3返回1->2->2->4->3->5', () => {
    const node = new ListNode(1);
    node.next = new ListNode(4);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(2);
    node.next.next.next.next = new ListNode(5);
    node.next.next.next.next.next = new ListNode(2);
    const result = partition(node, 3);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(2);
    expect(result.next.next.val).to.be(2);
    expect(result.next.next.next.val).to.be(4);
    expect(result.next.next.next.next.val).to.be(3);
    expect(result.next.next.next.next.next.val).to.be(5);
  });
});
