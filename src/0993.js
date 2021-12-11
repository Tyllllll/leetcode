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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  const father1 = [0, 0]
  const father2 = [0, 0]
  const dfs = (node, depth) => {
    if (node === null) {
      return
    }
    if (node.val === x) {
      father1[1] = depth
    }
    if (node.val === y) {
      father2[1] = depth
    }
    if (father1[1] === 0) {
      father1[0] = node.val
    }
    if (father2[1] === 0) {
      father2[0] = node.val
    }
    dfs(node.left, depth + 1)
    if (father1[1] === 0) {
      father1[0] = node.val
    }
    if (father2[1] === 0) {
      father2[0] = node.val
    }
    dfs(node.right, depth + 1)
  }
  dfs(root, 1)
  if (father1[0] !== father2[0] && father1[1] === father2[1]) {
    return true
  }
  return false
}
