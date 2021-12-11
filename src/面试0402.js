/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
import { TreeNode, printTree } from './modules/tree.js'
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  if (nums.length === 1) {
    return new TreeNode(nums[0])
  }
  const midIndex = Math.floor(nums.length / 2)
  const num = nums[midIndex]
  const leftTree = sortedArrayToBST(nums.slice().slice(0, midIndex))
  const rightTree = sortedArrayToBST(nums.slice().slice(midIndex + 1, nums.length))
  return new TreeNode(num, leftTree, rightTree)
}
printTree(sortedArrayToBST([-10, -3, 0, 5, 9]))
