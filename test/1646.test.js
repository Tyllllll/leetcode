import fun from '../src/1646'
test('用例1', () => {
  const nums = 7
  const myAns = fun(nums)
  const ans = 3
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = 2
  const myAns = fun(nums)
  const ans = 1
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const nums = 3
  const myAns = fun(nums)
  const ans = 2
  expect(myAns).toBe(ans)
})
