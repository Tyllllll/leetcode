import fun from '../src/剑指二52'
import { generateTree, printTreeToArray } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([5, 3, 6, 2, 4, null, 8, 1, null, null, null, 7, 9])
  const myAns = fun(tree)
  const ans = generateTree([
    1,
    null,
    2,
    null,
    3,
    null,
    4,
    null,
    5,
    null,
    6,
    null,
    7,
    null,
    8,
    null,
    9,
  ])
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const tree = generateTree([5, 1, 7])
  const myAns = fun(tree)
  const ans = generateTree([1, null, 5, null, 7])
  expect(myAns).toEqual(ans)
})
