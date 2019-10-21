const expect = require('expect.js');
const deleteDuplicates = require('./index');
const ListNode = require('../../../../src/data-structure/list-node');

describe('删除排序数组中的重复项2', () => {
  it('输入1->2->3->3->4->4->5返回1->2->5', () => {
    const node = new ListNode(1);
    node.next = new ListNode(2);
    node.next.next = new ListNode(3);
    node.next.next.next = new ListNode(3);
    node.next.next.next.next = new ListNode(4);
    node.next.next.next.next.next = new ListNode(4);
    node.next.next.next.next.next.next = new ListNode(5);
    const result = deleteDuplicates(node);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(2);
    expect(result.next.next.val).to.be(5);
  });
  it('输入1->1->1->2->3返回2->3', () => {
    const node = new ListNode(1);
    node.next = new ListNode(1);
    node.next.next = new ListNode(1);
    node.next.next.next = new ListNode(2);
    node.next.next.next.next = new ListNode(3);
    const result = deleteDuplicates(node);
    expect(result.val).to.be(2);
    expect(result.next.val).to.be(3);
  });
});
