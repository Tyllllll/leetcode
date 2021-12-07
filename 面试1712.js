/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBiNode = function(root) {
  const dummy = new TreeNode(0)
  let temp = dummy
  const dfs = (node) => {
    if (node === null) {
      return
    }
    dfs(node.left)
    temp.right = node
    node.left = null
    temp = node
    dfs(node.right)
  }
  dfs(root)
  return dummy.right
}
