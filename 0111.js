function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  const leftDepth = minDepth(root.left)
  const rightDepth = minDepth(root.right)
  if (leftDepth * rightDepth === 0) {
    return Math.max(leftDepth, rightDepth) + 1
  } else {
    return Math.min(leftDepth, rightDepth) + 1
  }
}
