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
var isBalanced = function (root) {
  const dfs = (node) => {
    if (node === null) {
      return 0
    }
    let leftRes = dfs(node.left)
    let rightRes = dfs(node.right)
    if (leftRes === -1 || rightRes === -1) {
      return -1
    }
    if (Math.abs(leftRes - rightRes) > 1) {
      return -1
    }
    return Math.max(leftRes, rightRes) + 1
  }
  return dfs(root) >= 0
}
