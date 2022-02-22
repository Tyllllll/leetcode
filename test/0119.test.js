import fun from '../src/0119'
test('用例1', () => {
  const nums = 3
  const myAns = fun(nums)
  const ans = [1, 3, 3, 1]
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const nums = 0
  const myAns = fun(nums)
  const ans = [1]
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const nums = 1
  const myAns = fun(nums)
  const ans = [1, 1]
  expect(myAns).toEqual(ans)
})
