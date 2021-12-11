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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  while (true) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right
    } else {
      break
    }
  }
  return root
}

const tree = generateTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
console.log(lowestCommonAncestor(tree, tree.left, tree.left.right))
// console.log(lowestCommonAncestor(tree, tree.left, tree.right))

// var lowestCommonAncestor = function (root, p, q) {
//   const getPath = (treeNode, node) => {
//     if (!treeNode) {
//       return []
//     }
//     let path
//     if (node === treeNode) {
//       return [treeNode]
//     } else if (node.val < treeNode.val) {
//       path = getPath(treeNode.left, node)
//     } else {
//       path = getPath(treeNode.right, node)
//     }
//     return [treeNode, ...path]
//   }
//   const path1 = getPath(root, p)
//   const path2 = getPath(root, q)
//   for (let i = 0; i < Math.max(path1.length, path2.length); i++) {
//     if (path1[i] !== path2[i]) {
//       return path1[i - 1]
//     }
//   }
// }
