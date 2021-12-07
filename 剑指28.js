/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isSame = (node1, node2) => {
    if (node1 === null && node2 === null) {
      return true
    } else if (node1 === null || node2 === null) {
      return false
    }
    if (node1.val !== node2.val) {
      return false
    }
    return isSame(node1.left, node2.right) && isSame(node1.right, node2.left)
  }
  return isSame(root, root)
}
