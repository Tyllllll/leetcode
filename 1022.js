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
var sumRootToLeaf = function (root) {
  let res = 0
  let temp = []
  const dfs = (node) => {
    temp.push(node.val)
    if (node.left === null && node.right === null) {
      let length = temp.length - 1
      res += temp.reduce((prev, val) => {
        prev += val * 2 ** length
        length--
        return prev
      }, 0)
      return
    }
    if (node.left) {
      dfs(node.left)
      temp.pop()
    }
    if (node.right) {
      dfs(node.right)
      temp.pop()
    }
  }
  dfs(root, 0)
  return res
}

const tree = generateTree([1, 0, 1, 0, 1, 0, 1])
printTree(tree)
console.log(sumRootToLeaf(tree))
