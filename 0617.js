/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { TreeNode, generateTree, printTree } from './modules/tree.js'
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root2) {
    return root1
  }
  if (!root1) {
    return root2
  }
  const node = new TreeNode(root1.val + root2.val)
  node.left = mergeTrees(root1.left, root2.left)
  node.right = mergeTrees(root1.right, root2.right)
  return node
}
const tree1 = generateTree([1, 3, 2, 5])
const tree2 = generateTree([2, 1, 3, null, 4, null, 7])
printTree(mergeTrees(tree1, tree2))
