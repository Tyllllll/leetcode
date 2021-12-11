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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  let leftRes
  let rightRes
  if (root.left === null) {
    leftRes = true
  } else {
    leftRes = root.val === root.left.val && isUnivalTree(root.left)
  }
  if (root.right === null) {
    rightRes = true
  } else {
    rightRes = root.val === root.right.val && isUnivalTree(root.right)
  }
  return leftRes && rightRes
}
// var isUnivalTree = function(root) {
//   let num = -1
//   let res = true
//   const dfs = (node) => {
//     if (res === false) {
//       return
//     }
//     if (node === null) {
//       return
//     }
//     if (num === -1) {
//       num = node.val
//     } else {
//       res = num === node.val
//     }
//     dfs(node.left)
//     dfs(node.right)
//   }
//   dfs(root)
//   return res
// }
