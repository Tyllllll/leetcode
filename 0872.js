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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const dfs = (node, arr) => {
    if (node === null) {
      return
    }
    if (node.left === null && node.right === null) {
      arr.push(node.val)
      return
    }
    dfs(node.left, arr)
    dfs(node.right, arr)
  }
  const arr1 = []
  dfs(root1, arr1)
  const arr2 = []
  dfs(root2, arr2)
  if (arr1.length !== arr2.length) {
    return false
  }
  return arr1.every((val, i) => val === arr2[i])
}

const tree1 = generateTree([1, 2, 3])
const tree2 = generateTree([1, 3, 2])
console.log(leafSimilar(tree1, tree2))
