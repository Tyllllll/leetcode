import fun from '../src/0055'
test('用例1', () => {
  const nums = [2, 3, 1, 1, 4]
  const myAns = fun(nums)
  const ans = true
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [3, 2, 1, 0, 4]
  const myAns = fun(nums)
  const ans = false
  expect(myAns).toBe(ans)
})

test('用例3', () => {
  const nums = [0]
  const myAns = fun(nums)
  const ans = true
  expect(myAns).toBe(ans)
})

test('用例4', () => {
  const nums = [0, 2, 3]
  const myAns = fun(nums)
  const ans = false
  expect(myAns).toBe(ans)
})
