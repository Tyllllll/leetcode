/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  let maxDepth = 0
  const dfs = (node, depth) => {
    if (!node) {
      return
    }
    if (depth > maxDepth) {
      maxDepth = depth
    }
    node.children.forEach((child) => {
      dfs(child, depth + 1)
    })
  }
  dfs(root, 1)
  return maxDepth
}
