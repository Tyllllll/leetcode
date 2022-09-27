import fun from '../src/0494'
test('用例1', () => {
  const nums = [1, 1, 1, 1, 1]
  const target = 3
  const myAns = fun(nums, target)
  const ans = 5
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums = [1]
  const target = 1
  const myAns = fun(nums, target)
  const ans = 1
  expect(myAns).toBe(ans)
})
