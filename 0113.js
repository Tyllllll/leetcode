/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return []
  }
  const res = []
  function dfs(arr, tree, cul) {
    if (!tree.left && !tree.right) {
      if (cul === targetSum) {
        res.push(arr)
      }
      return
    }
    if (tree.left) {
      dfs([...arr, tree.left.val], tree.left, cul + tree.left.val)
    }
    if (tree.right) {
      dfs([...arr, tree.right.val], tree.right, cul + tree.right.val)
    }
  }
  dfs([root.val], root, root.val)
  return res
}

// const tree = new TreeNode(5)
// tree.left = new TreeNode(4)
// tree.left.left = new TreeNode(11)
// tree.left.left.left = new TreeNode(7)
// tree.left.left.right = new TreeNode(2)
// tree.right = new TreeNode(8)
// tree.right.left = new TreeNode(13)
// tree.right.right = new TreeNode(4)
// tree.right.right.left = new TreeNode(5)
// tree.right.right.right = new TreeNode(1)
const tree = new TreeNode(-2)
tree.right = new TreeNode(-3)
console.log(pathSum(tree, -5))
