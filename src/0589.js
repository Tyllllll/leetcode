/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  const res = []
  const dfs = (node) => {
    if (node === null) {
      return
    }
    res.push(node.val)
    node.children.forEach((child) => {
      dfs(child)
    })
  }
  dfs(root)
  return res
}
