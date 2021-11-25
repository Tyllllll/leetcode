/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { generateTree } from './modules/tree.js'
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  const res = []
  const count = []
  const dfs = (node, depth) => {
    if (!node) {
      return
    }
    res[depth] = (res[depth] || 0) + node.val
    count[depth] = (count[depth] || 0) + 1
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
  dfs(root, 0)
  for (let i = 0; i < res.length; i++) {
    res[i] /= count[i]
  }
  return res
}
const tree = generateTree([3, 9, 20, null, null, 15, 7])
console.log(averageOfLevels(tree))
