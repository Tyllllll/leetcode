import fun from '../src/0746'
test('用例1', () => {
  const nums = [10, 15, 20]
  const myAns = fun(nums)
  const ans = 15
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
  const myAns = fun(nums)
  const ans = 6
  expect(myAns).toBe(ans)
})
