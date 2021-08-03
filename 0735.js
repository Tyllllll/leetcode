/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const res = []
  for (const val of asteroids) {
    if (res.length && res[res.length - 1] > 0 && val < 0) {
      while (res[res.length - 1] > 0 && res[res.length - 1] < -val) {
        res.pop()
      }
      if (res[res.length - 1] > -val) {
        continue
      } else if (res[res.length - 1] === -val) {
        res.pop()
        continue
      }
    }
    res.push(val)
  }
  return res
}
