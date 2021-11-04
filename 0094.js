function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = []
  const midOrder = (node) => {
    if (!node) {
      return
    }
    midOrder(node.left)
    res.push(node.val)
    midOrder(node.right)
  }
  midOrder(root)
  return res
}
