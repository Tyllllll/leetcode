import BubbleSort from './BubbleSort'
function BucketSort(nums) {
  let max = nums[0]
  let min = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = nums[i] > max ? nums[i] : max
    min = nums[i] < min ? nums[i] : min
  }
  const bucketList = []
  for (let i = 0; i < nums.length; i++) {
    bucketList.push([])
  }
  const section = (max - min) / (nums.length - 1)
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    const index = Math.floor((element - min) / section)
    bucketList[index].push(element)
  }
  let index = 0
  bucketList.forEach((bucket) => {
    BubbleSort(bucket)
    bucket.forEach((value) => (nums[index++] = value))
  })
  return nums
}
export default BucketSort
