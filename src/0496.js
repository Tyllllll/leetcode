/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const stack = []
  const m = new Map()
  for (const i of nums2) {
    if (stack.length < 1 || stack[stack.length - 1] > i) {
      stack.push(i)
    } else {
      while (stack[stack.length - 1] < i) {
        m.set(stack.pop(), i)
      }
      stack.push(i)
    }
  }
  const result = []
  for (const i of nums1) {
    result.push(m.get(i) === undefined ? -1 : m.get(i))
  }
  return result
}
