import fun from '../src/剑指68_2'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const myAns = fun(tree, tree.left, tree.right)
  const ans = tree
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const tree = generateTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
  const myAns = fun(tree, tree.left, tree.left.right.right)
  const ans = tree.left
  expect(myAns).toBe(ans)
})
