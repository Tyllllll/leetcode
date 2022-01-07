import fun from '../src/剑指二56'
import { generateTree } from '../modules/tree.js'
test('用例1', () => {
  const tree = generateTree([8, 6, 10, 5, 7, 9, 11])
  const myAns = fun(tree, 12)
  const ans = true
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const tree = generateTree([8, 6, 10, 5, 7, 9, 11])
  const myAns = fun(tree, 22)
  const ans = false
  expect(myAns).toBe(ans)
})
