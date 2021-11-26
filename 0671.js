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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  const min = root.val
  let secondMin = 2e31
  const dfs = (node) => {
    if (!node) {
      return
    }
    if (node.val > min && node.val < secondMin) {
      secondMin = node.val
    }
    if (node.val >= secondMin) {
      return
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return secondMin === 2e31 ? -1 : secondMin
}
