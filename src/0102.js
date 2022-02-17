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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  const queue = [[root, 1]]
  const res = []
  while (queue.length) {
    const pair = queue.shift()
    const node = pair[0]
    const depth = pair[1]
    if (res.length !== depth) {
      res.push([])
    }
    res[depth - 1].push(node.val)
    if (node.left !== null) {
      queue.push([node.left, depth + 1])
    }
    if (node.right !== null) {
      queue.push([node.right, depth + 1])
    }
  }
  return res
}
export default levelOrder
