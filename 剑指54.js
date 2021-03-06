/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res
  const dfs = (node) => {
    if (res !== undefined) {
      return
    }
    if (node === null) {
      return
    }
    dfs(node.right)
    if (1 === k--) {
      res = node.val
    }
    dfs(node.left)
  }
  dfs(root)
  return res
}
