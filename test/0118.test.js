import fun from '../src/0118'
test('用例1', () => {
  const nums = 5
  const myAns = fun(nums)
  const ans = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const nums = 1
  const myAns = fun(nums)
  const ans = [[1]]
  expect(myAns).toEqual(ans)
})
