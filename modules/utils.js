export { swap }
/**
 * 交换数组中两个数
 * @param {*} nums 
 * @param {*} i 
 * @param {*} j 
 */
function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}
