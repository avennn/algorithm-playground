const expect = require('expect.js');
const ListNode = require('../../../../src/data-structure/list-node');
const deleteDuplicates = require('./index');

describe('删除排序链表中的重复元素', () => {
  it('1->1->2删除重复元素变成1->2', () => {
    const node = new ListNode(1);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    const result = deleteDuplicates(node);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(2);
  });
  it('1->1->2->3->3删除重复元素变成1->2->3', () => {
    const node = new ListNode(1);
    node.next = new ListNode(1);
    node.next.next = new ListNode(2);
    node.next.next.next = new ListNode(3);
    node.next.next.next.next = new ListNode(3);
    const result = deleteDuplicates(node);
    expect(result.val).to.be(1);
    expect(result.next.val).to.be(2);
    expect(result.next.next.val).to.be(3);
  });
});
