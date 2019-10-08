/**
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */
const isSameTree = function(p, q) {
  function same(p, q) {
    if (!p && !q) {
      return true;
    }
    if ((!p && q) || (p && !q) || p.val !== q.val) {
      return false;
    }
    return same(p.left, q.left) && same(p.right, q.right);
  }
  return same(p, q);
};

module.exports = isSameTree;
