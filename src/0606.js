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
 * @return {string}
 */
var tree2str = function (root) {
  let str = ''
  const dfs = (node) => {
    if (!node) {
      return
    }
    str += node.val
    if (node.left || node.right) {
      str += '('
      dfs(node.left)
      str += ')'
    }
    if (node.right) {
      str += '('
      dfs(node.right)
      str += ')'
    }
  }
  dfs(root)
  return str
}
const tree = generateTree([1, 2, 3, 4])

console.log(tree2str(tree))
