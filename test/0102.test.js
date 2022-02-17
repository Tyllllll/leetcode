import fun from '../src/0102'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([3, 9, 20, null, null, 15, 7])
  const res = fun(tree)
  const ans = [[3], [9, 20], [15, 7]]
  expect(res).toEqual(ans)
})

test('用例2', () => {
  const tree = generateTree([1])
  const res = fun(tree)
  const ans = [[1]]
  expect(res).toEqual(ans)
})

test('用例1', () => {
  const tree = generateTree([])
  const res = fun(tree)
  const ans = []
  expect(res).toEqual(ans)
})
