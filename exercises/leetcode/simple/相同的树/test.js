const expect = require('expect.js');
const isSameTree = require('./index');
const TreeNode = require('../../../../src/data-structure/tree-node');

describe('相同的树', () => {
  it('[1,2,3]与[1,2,3]是相同的树', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);
    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(2);
    tree2.right = new TreeNode(3);
    const result = isSameTree(tree1, tree2);
    expect(result).to.be(true);
  });
  it('[1,2]与[1,null,2]是相同的树', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    const tree2 = new TreeNode(1);
    tree2.right = new TreeNode(2);
    const result = isSameTree(tree1, tree2);
    expect(result).to.be(false);
  });
  it('[1,2,1]与[1,1,2]是相同的树', () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(1);
    const tree2 = new TreeNode(1);
    tree2.left = new TreeNode(1);
    tree2.right = new TreeNode(2);
    const result = isSameTree(tree1, tree2);
    expect(result).to.be(false);
  });
});
