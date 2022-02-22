function CountSort(nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i]
    max = element > max ? element : max
  }
  const counts = new Array(max + 1).fill(0)
  nums.forEach((element) => {
    counts[element]++
  })
  let index = 0
  counts.forEach((count, element) => {
    for (let i = 0; i < count; i++) {
      nums[index++] = element
    }
  })
  return nums
}
export default CountSort
