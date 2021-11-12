const generateTree = (arr) => {
  if (!arr.length) {
    return null
  }
  const root = new TreeNode(arr[0])
  const queue = [root]
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift()
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    if (arr[i + 1] !== null) {
      node.right = new TreeNode(arr[i + 1])
      queue.push(node.right)
    }
  }
  return root
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0
  const dfs = (node) => {
    if (!node) {
      return 0
    }
    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)
    if (leftDepth + rightDepth > ans) {
      ans = leftDepth + rightDepth
    }
    return Math.max(leftDepth, rightDepth) + 1
  }
  dfs(root)
  return ans
}

const tree = generateTree([1, 2, 3, 4, 5])
console.log(diameterOfBinaryTree(tree))
