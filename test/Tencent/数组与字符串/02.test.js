import fun from '../../../src/Tencent/数组与字符串/02'
test('用例1', () => {
  const nums1 = [1, 3]
  const nums2 = [2]
  const myAns = fun(nums1, nums2)
  const ans = 2
  expect(myAns).toBe(ans)
})

test('用例2', () => {
  const nums1 = [1, 2]
  const nums2 = [3, 4]
  const myAns = fun(nums1, nums2)
  const ans = 2.5
  expect(myAns).toBe(ans)
})
