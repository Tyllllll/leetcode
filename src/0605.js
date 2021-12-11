/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i]) {
      if (i === 0) {
        if (!flowerbed[i + 1]) {
          flowerbed[i] = 1
          n--
          i++
        }
      } else if (i === flowerbed.length - 1) {
        if (!flowerbed[i - 1]) {
          flowerbed[i] = 1
          n--
        }
      } else {
        if (!flowerbed[i + 1] && !flowerbed[i - 1]) {
          flowerbed[i] = 1
          n--
          i++
        }
      }
    }
  }
  return n <= 0
}
