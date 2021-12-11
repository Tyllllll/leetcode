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
    node.children.forEach((child) => {
      dfs(child)
    })
    res.push(node.val)
  }
  dfs(root)
  return res
}
