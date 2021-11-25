export { TreeNode, generateTree, printTree }

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

const generateTree = (arr) => {
  if (!arr.length) {
    return null
  }
  const root = new TreeNode(arr[0])
  const queue = [root]
  for (let i = 1; i < arr.length; i += 2) {
    const node = queue.shift()
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i])
      queue.push(node.left)
    }
    if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
      node.right = new TreeNode(arr[i + 1])
      queue.push(node.right)
    }
  }
  return root
}

const printTree = (root) => {
  const dfs = (node, depth) => {
    if (!node) {
      return
    }
    let str = ''
    for (let i = 0; i < depth; i++) {
      str += '--'
    }
    str += node?.val
    console.log(str)
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }
  dfs(root, 0)
}
