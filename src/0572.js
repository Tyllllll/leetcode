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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  const isSameTree = (node1, node2) => {
    if (!node1 && !node2) {
      return true
    } else if (!node1 || !node2) {
      return false
    }
    if (node1.val !== node2.val) {
      return false
    }
    return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right)
  }
  if (!root) {
    return false
  }
  if (isSameTree(root, subRoot)) {
    return true
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
  }
}
const tree = generateTree([1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
const subTree = generateTree([1, null, 1, null, 1, null, 1, null, 1, null, 1, 2])
console.log(isSubtree(tree, subTree))
