const generateTree = (arr) => {
  if (!arr.length) {
    return null
  }
  const root = new TreeNode(arr[0])
  const queue = [root]
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift()
    if (arr[i]) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    if (arr[i + 1]) {
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false
  }
  if (!root.left && !root.right) {
    if (targetSum === root.val) {
      return true
    } else {
      return false
    }
  }
  let res = false
  res = hasPathSum(root.left, targetSum - root.val)
  if (!res) {
    res = hasPathSum(root.right, targetSum - root.val)
  }
  return res
}

const tree = generateTree([1, 2, 3])
console.log(hasPathSum(tree, 5))
