function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isSame = (p, q) => {
    if (!p && !q) {
      return true
    } else if (!p || !q) {
      return false
    } else if (p.val === q.val) {
      return isSame(p.left, q.right) && isSame(p.right, q.left)
    } else {
      return false
    }
  }
  return isSame(root, root)
}
