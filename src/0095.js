/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const getTrees = (start, end) => {
    if (start > end) {
      return [null]
    }
    if (start === end) {
      return [new TreeNode(start)]
    }
    const res = []
    for (let i = start; i <= end; i++) {
      const leftTrees = getTrees(start, i - 1)
      const rightTrees = getTrees(i + 1, end)
      leftTrees.forEach((left) => {
        rightTrees.forEach((right) => {
          const root = new TreeNode(i)
          root.left = left
          root.right = right
          res.push(root)
        })
      })
    }
    return res
  }
  return getTrees(1, n)
}

console.log(generateTrees(3))
