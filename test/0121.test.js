import fun from '../src/0121'
test('用例1', () => {
  const nums = [7, 1, 5, 3, 6, 4]
  const myAns = fun(nums)
  const ans = 5
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [7, 6, 4, 3, 1]
  const myAns = fun(nums)
  const ans = 0
  expect(myAns).toBe(ans)
})
