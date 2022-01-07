/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans
  const dfs = (node) => {
    if (ans !== undefined) {
      return false
    }
    if (node == null) {
      return false
    }
    const leftRes = dfs(node.left)
    const rightRes = dfs(node.right)
    if (leftRes && rightRes) {
      ans = node
    }
    if ((leftRes || rightRes) && (node === p || node === q)) {
      ans = node
    }
    if (node === p && node === q) {
      ans = node
    }
    return leftRes || rightRes || node === p || node === q
  }
  dfs(root)
  return ans
}
export default lowestCommonAncestor
