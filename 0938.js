/**
* Definition for a binary tree node.
* function TreeNode(val, left, right) {
*     this.val = (val===undefined ? 0 : val)
*     this.left = (left===undefined ? null : left)
*     this.right = (right===undefined ? null : right)
* }
*/
/**
* @param {TreeNode} root
* @param {number} low
* @param {number} high
* @return {number}
*/
var rangeSumBST = function(root, low, high) {
  if (root === null) {
    return 0
  }
  if (root.val > high) {
    return rangeSumBST(root.left, low, high)
  }
  if (root.val < low) {
    return rangeSumBST(root.right, low, high)
  }
  return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
}
// var rangeSumBST = function(root, low, high) {
//   let res = 0
//   let temp
//   const dfs = (node) => {
//     if (node === null) {
//       return
//     }
//     temp = node.val
//     if (temp >= low && temp <= high) {
//       res += temp
//     }
//     if (temp >= low) {
//       dfs(node.left)
//     }
//     if (temp <= high) {
//       dfs(node.right)
//     }
//   }
//   dfs(root)
//   return res
// }
