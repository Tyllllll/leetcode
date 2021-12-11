/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import { generateTree } from './modules/tree.js'
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const dfs = (node) => {
    if (node === null) {
      return 0
    }
    const leftDepth = dfs(node.left)
    if (leftDepth === -1) {
      return -1
    }
    const rightDepth = dfs(node.right)
    if (rightDepth === -1) {
      return -1
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    }
    return Math.max(leftDepth, rightDepth) + 1
  }
  return dfs(root) === -1 ? false : true
}
const tree = generateTree([1, 2, 2, 3, 3, null, null, 4, 4])
console.log(isBalanced(tree))
