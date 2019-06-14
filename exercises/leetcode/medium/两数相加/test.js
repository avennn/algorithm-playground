const expect = require('expect.js');
const { ListNode, addTwoNumbers } = require('./index');

describe('两数相加', () => {
  it('(2 - > 4 - > 3) + (5 - > 6 - > 4) = (7 - > 0 - > 8)', () => {
    const l1 = new ListNode(2);
    l1.next = new ListNode(4);
    l1.next.next = new ListNode(3);
    const l2 = new ListNode(5);
    l2.next = new ListNode(6);
    l2.next.next = new ListNode(4);
    const sum = addTwoNumbers(l1, l2);
    expect(sum.val).to.be(7);
    expect(sum.next.val).to.be(0);
    expect(sum.next.next.val).to.be(8);
  });
});
