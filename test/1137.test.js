import fun from '../src/1137'
test('用例1', () => {
  const nums = 4
  const myAns = fun(nums)
  const ans = 4
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = 25
  const myAns = fun(nums)
  const ans = 1389537
  expect(myAns).toBe(ans)
})