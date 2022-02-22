import fun from '../src/0053'
test('用例1', () => {
  const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
  const myAns = fun(nums)
  const ans = 6
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [1]
  const myAns = fun(nums)
  const ans = 1
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const nums = [5, 4, -1, 7, 8]
  const myAns = fun(nums)
  const ans = 23
  expect(myAns).toBe(ans)
})
