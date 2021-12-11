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
 * @return {number}
 */
var findTilt = function (root) {
  const fun = (node) => {
    if (!node) {
      return [0, 0]
    }
    const [leftVal, leftSlope] = fun(node.left)
    const [rightVal, rightSlope] = fun(node.right)
    return [leftVal + rightVal + node.val, leftSlope + rightSlope + Math.abs(leftVal - rightVal)]
  }
  const [_, ans] = fun(root)
  return ans
}
