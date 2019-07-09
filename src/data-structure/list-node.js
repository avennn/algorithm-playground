function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.prototype.toArray = function() {
  const arr = [this.val];
  let next = this.next;
  while (next) {
    arr.push(next.val);
    next = next.next;
  }
  return arr;
};

ListNode.prototype.toString = function(splitMark) {
  return this.toArray().join(splitMark);
};

module.exports = ListNode;
