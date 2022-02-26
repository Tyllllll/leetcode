function CountSort(nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = max < nums[i] ? nums[i] : max
  }
  const count = new Array(max + 1).fill(0)
  nums.forEach((num) => {
    count[num]++
  })
  let i = 0
  count.forEach((times, num) => {
    for (let j = 0; j < times; j++) {
      nums[i++] = num
    }
  })
  return nums
}
export default CountSort
