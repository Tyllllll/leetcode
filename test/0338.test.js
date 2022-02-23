import fun from '../src/0338'
test('用例1', () => {
  const nums = 2
  const myAns = fun(nums)
  const ans = [0, 1, 1]
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const nums = 5
  const myAns = fun(nums)
  const ans = [0, 1, 1, 2, 1, 2]
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const nums = 0
  const myAns = fun(nums)
  const ans = [0]
  expect(myAns).toEqual(ans)
})
