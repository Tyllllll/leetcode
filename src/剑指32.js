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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  const queue = [[root, 0]]
  const res = []
  let curNode, curDepth
  while (queue.length > 0) {
    ;[curNode, curDepth] = queue.shift()
    if (res[curDepth] === undefined) {
      res[curDepth] = []
    }
    res[curDepth].push(curNode.val)
    if (curNode.left !== null) {
      queue.push([curNode.left, curDepth + 1])
    }
    if (curNode.right !== null) {
      queue.push([curNode.right, curDepth + 1])
    }
  }
  return res
}

const tree = generateTree([3, 9, 20, null, null, 15, 7])
console.log(levelOrder(tree))
