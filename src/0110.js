function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const checkBalanced = (node) => {
    if (!node) {
      return 0
    }
    const leftDepth = checkBalanced(node.left)
    if (leftDepth === -2) {
      return -2
    }
    const rightDepth = checkBalanced(node.right)
    
    if (Math.abs(leftDepth - rightDepth) <= 1) {
      return Math.max(leftDepth, rightDepth) + 1
    } else {
      return -2
    }
  }
  return checkBalanced(root) === -2 ? false : true
}
