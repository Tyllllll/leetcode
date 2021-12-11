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
var getMinimumDifference = function (root) {
  let res = 99999999
  let prev = -1
  const fun = (node) => {
    if (!node) {
      return
    }
    fun(node.left)
    if (prev !== -1) {
      if (node.val - prev < res) {
        res = node.val - prev
      }
    }
    prev = node.val
    fun(node.right)
  }
  fun(root)
  return res
}
