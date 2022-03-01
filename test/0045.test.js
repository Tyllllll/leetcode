import fun from '../src/0045'
test('用例1', () => {
  const nums = [2, 3, 1, 1, 4]
  const myAns = fun(nums)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [2, 3, 0, 1, 4]
  const myAns = fun(nums)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const nums = [2, 1]
  const myAns = fun(nums)
  const ans = 1
  expect(myAns).toBe(ans)
})
