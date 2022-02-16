/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const dfs = (node, lower, upper) => {
    if (node === null) {
      return true
    }
    if (node.val <= lower || node.val >= upper) {
      return false
    }
    const leftRes = dfs(node.left, lower, node.val)
    const rightRes = dfs(node.right, node.val, upper)
    return leftRes && rightRes
  }
  return dfs(root, -Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}
export default isValidBST
