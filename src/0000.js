function fun(nums) {
  const len = nums.length
  const sum = [0]
  const mx = [0]
  const mval = [0]
  let s = 0
  let ans = 0
  for (let i = 1; i <= len; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]
    s += nums[i - 1]
    if (s < 0) {
      s = 0
    }
    mx[i] = Math.max(mx[i - 1], s)
    mval[i] = Math.max(mval[i - 1], mx[i] - sum[i])
    ans = Math.max(ans, sum[i] + mval[i - 1])
    // for (let j = 1; j < i; j++) {
      // [j, i], mx[1, j - 1]
      // ans = Math.max(ans, sum[i] - sum[j - 1] + mx[j - 1])
    // }
  }
  return ans
}
export default fun
