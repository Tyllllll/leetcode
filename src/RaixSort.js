function RaixSort(nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], max)
  }
  let maxDigit = 0
  while (max) {
    max = Math.floor(max / 10)
    maxDigit++
  }
  let mod = 10
  let dev = 1
  const bucketList = []
  for (let i = 0; i < maxDigit; i++, dev *= 10) {
    for (let j = 0; j < nums.length; j++) {
      const count = Math.floor(nums[j] / dev) % mod
      if (bucketList[count] === undefined) {
        bucketList[count] = []
      }
      bucketList[count].push(nums[j])
    }
    let index = 0
    for (let j = 0; j < mod; j++) {
      if (bucketList[j] !== undefined) {
        while (bucketList[j].length) {
          nums[index++] = bucketList[j].shift()
        }
      }
    }
  }
  return nums
}
export default RaixSort
