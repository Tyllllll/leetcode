/**
 * @param {number[]} stones
 * @return {number}
 */
// var lastStoneWeight = function (stones) {
//   if (stones.length === 1) return stones[0]
//   const arr = new Array(1000).fill(0)
//   let max = 0
//   stones.forEach((val) => {
//     arr[val - 1]++
//     if (val > max) max = val
//   })
//   let stoneNum = stones.length
//   let big = 0
//   let small = 0
//   for (let i = max - 1; i >= 0; i--) {
//     if (arr[i] === 0) continue
//     if (big === 0) {
//       big = i + 1
//       arr[i]--
//     } else {
//       small = i + 1
//       arr[i]--
//       const err = big - small
//       if (err !== 0) {
//         arr[err - 1]++
//         stoneNum++
//       }
//       if (err - 1 > i) i = err - 1
//       big = 0
//       small = 0
//     }
//     stoneNum--
//     if (stoneNum === 1 && big === 0) break
//     if (arr[i] !== 0) i++
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) return i + 1
//   }
//   return 0
// }
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a)
    const a = stones.shift()
    const b = stones.shift()
    const err = a - b
    if (err !== 0) stones.unshift(err)
  }
  return stones[0] || 0
}
console.log(lastStoneWeight([2,2]))
