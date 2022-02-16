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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let node1 = null
  let node1Next = null
  let node2 = null
  let nodeLast = null
  const dfs = (node) => {
    if (node === null) {
      return
    }
    dfs(node.left)
    if (nodeLast !== null) {
      if (nodeLast.val > node.val) {
        if (node1 === null) {
          node1 = nodeLast
          node1Next = node
        } else {
          node2 = node
          node1Next = null
        }
      }
    }
    nodeLast = node
    dfs(node.right)
  }
  dfs(root)
  if (node2 === null) {
    const temp = node1.val
    node1.val = node1Next.val
    node1Next.val = temp
  } else {
    const temp = node1.val
    node1.val = node2.val
    node2.val = temp

  }
}
export default recoverTree
