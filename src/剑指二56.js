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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const list = []
  const dfs = (node) => {
    if (node === null) {
      return
    }
    dfs(node.left)
    list.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  let i = 0
  let j = list.length - 1
  while (i < j) {
    if (k < list[i] + list[j]) {
      j--
    } else if (k > list[i] + list[j]) {
      i++
    } else {
      return true
    }
  }
  return false
}
export default findTarget
