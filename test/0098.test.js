import fun from '../src/0098'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([2, 1, 3])
  const myAns = fun(tree)
  const ans = true
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const tree = generateTree([5, 1, 4, null, null, 3, 6])
  const myAns = fun(tree)
  const ans = false
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const tree = generateTree([2, 2, 2])
  const myAns = fun(tree)
  const ans = false
  expect(myAns).toBe(ans)
})

test('用例4', () => {
  const tree = generateTree([5,4,6,null,null,3,7])
  const myAns = fun(tree)
  const ans = false
  expect(myAns).toBe(ans)
})