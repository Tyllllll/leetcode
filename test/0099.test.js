import fun from '../src/0099'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([1, 3, null, null, 2])
  fun(tree)
  const ans = generateTree([3, 1, null, null, 2])
  expect(tree).toEqual(ans)
})

test('用例2', () => {
  const tree = generateTree([3, 1, 4, null, null, 2])
  fun(tree)
  const ans = generateTree([2, 1, 4, null, null, 3])
  expect(tree).toEqual(ans)
})

test('用例3', () => {
  const tree = generateTree([3, 2, null, null, 1])
  fun(tree)
  const ans = generateTree([3, 1, null, null, 2])
  expect(tree).toEqual(ans)
})
