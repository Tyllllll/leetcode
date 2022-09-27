/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const merge = []
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      merge.push(nums1.shift())
    } else {
      merge.push(nums2.shift())
    }
  }
  if (nums1.length) {
    merge.push(...nums1)
  }
  if (nums2.length) {
    merge.push(...nums2)
  }
  const mid = merge.length >> 1
  if (merge.length % 2) {
    return merge[mid]
  } else {
    return (merge[mid] + merge[mid - 1]) / 2
  }
}
export default findMedianSortedArrays
