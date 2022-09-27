import fun from '../../../src/Tencent/数组与字符串/01'
test('用例1', () => {
  const nums = [2, 7, 11, 15]
  const target = 9
  const myAns = fun(nums, target)
  const ans = [0, 1]
  expect(myAns).toEqual(ans)
})

test('用例2', () => {
  const nums = [3, 2, 4]
  const target = 6
  const myAns = fun(nums, target)
  const ans = [1, 2]
  expect(myAns).toEqual(ans)
})

test('用例3', () => {
  const nums = [3, 3]
  const target = 6
  const myAns = fun(nums, target)
  const ans = [0, 1]
  expect(myAns).toEqual(ans)
})
