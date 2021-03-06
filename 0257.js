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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) {
    return []
  }
  if (!root.left && !root.right) {
    return [`${root.val}`]
  }
  const path = []
  path.push(...binaryTreePaths(root.left))
  path.push(...binaryTreePaths(root.right))
  return path.map((val) => `${root.val}->${val}`)
}
