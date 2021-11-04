function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  const getDepth = (node, depth) => {
    if (!node) {
      return depth
    }
    depth = Math.max(getDepth(node.left, depth+1), getDepth(node.right, depth+1))
    return depth
  }
  return getDepth(root, 0)
}

console.log(maxDepth(new TreeNode(1, new TreeNode(2))))