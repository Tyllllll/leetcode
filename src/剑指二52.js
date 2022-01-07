/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

import { TreeNode } from '../modules/tree'

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummy = new TreeNode(0)
  let temp = dummy
  const dfs = (node) => {
    if (node === null) {
      return
    }
    dfs(node.left)
    temp.right = node
    node.left = null
    temp = temp.right
    dfs(node.right)
  }
  dfs(root)
  return dummy.right
}
export default increasingBST
