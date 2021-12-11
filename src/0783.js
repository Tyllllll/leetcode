/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { generateTree, printTree } from './modules/tree.js'
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let min = -1
  let prevVal = -1
  const dfs = (node) => {
    if (!node) {
      return
    }
    dfs(node.left)
    if (prevVal !== -1) {
      min = min !== -1 ? Math.min(node.val - prevVal) : node.val - prevVal
    }
    prevVal = node.val
    dfs(node.right)
  }
  dfs(root)
  return min
}
const tree = generateTree([4, 2, 6, 1, 3])
console.log(minDiffInBST(tree));