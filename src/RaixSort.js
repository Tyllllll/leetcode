function RaixSort(nums) {
  let max = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max = nums[i] > max ? nums[i] : max
  }
  let maxDigit = 0
  while (max) {
    max = Math.floor(max / 10)
    maxDigit++
  }
  let mod = 10
  let dev = 1
  const counter = []
  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j = 0; j < nums.length; j++) {
      const bucket = Math.floor((nums[j] % mod) / dev)
      if (counter[bucket] === undefined) {
        counter[bucket] = []
      }
      counter[bucket].push(nums[j])
    }
    let index = 0
    for (let j = 0; j < counter.length; j++) {
      if (counter[j] === undefined) {
        continue
      }
      while (counter[j].length) {
        nums[index++] = counter[j].shift()
      }
    }
  }
  return nums
}
export default RaixSort
