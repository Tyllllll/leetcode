import fun from '../src/剑指68_1'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  expect(fun(tree, tree.left, tree.right)).toBe(tree)
})

test('用例2', () => {
  const tree = generateTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])
  expect(fun(tree, tree.left, tree.left.right)).toBe(tree.left)
})
