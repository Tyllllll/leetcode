import fun from '../src/0538'
import { generateTree } from '../modules/tree'
test('用例1', () => {
  const tree = generateTree([4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8])
  const myAns = fun(tree)
  const ans = generateTree([30, 36, 21, 36, 35, 26, 15, null, null, null, 33, null, null, null, 8])
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const tree = generateTree([0, null, 1])
  const myAns = fun(tree)
  const ans = generateTree([1, null, 1])
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const tree = generateTree([1, 0, 2])
  const myAns = fun(tree)
  const ans = generateTree([3, 3, 2])
  expect(myAns).toEqual(ans)
})

test('用例4', () => {
  const tree = generateTree([3, 2, 4, 1])
  const myAns = fun(tree)
  const ans = generateTree([7, 9, 4, 10])
  expect(myAns).toEqual(ans)
})
