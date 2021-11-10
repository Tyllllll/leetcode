const generateTree = (arr) => {
  if (!arr.length) {
    return null
  }
  const root = new TreeNode(arr[0])
  const queue = [root]
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift()
    if (arr[i] !== undefined) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    if (arr[i + 1] !== undefined) {
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
 * @return {number[]}
 */
var findMode = function (root) {
  let num = 0
  let count = 0
  let ans = []
  let max_count = 0
  const fun = (node) => {
    if (!node) {
      return
    }
    fun(node.left)
    if (node.val === num) {
      count++
    } else {
      count = 1
      num = node.val
    }
    if (count === max_count) {
      ans.push(num)
    }
    if (count > max_count) {
      max_count = count
      ans = [num]
    }
    fun(node.right)
  }
  fun(root)
  return ans
}

const tree = generateTree([1, 0, 1, 0, 0, 1, 1, 0])
console.log(findMode(tree))
