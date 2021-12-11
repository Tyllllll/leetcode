/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  // 0 => N
  // 1 => E
  // 2 => S
  // 3 => W
  let dir = 0
  const position = [0, 0]
  const set = new Set(obstacles.map((val) => val.toString()))
  const res = commands.reduce((max, val) => {
    switch (val) {
      case -2:
        dir = dir <= 0 ? 3 : dir - 1
        break
      case -1:
        dir = dir >= 3 ? 0 : dir + 1
        break
      default:
        while (val--) {
          const [x, y] = position
          switch (dir) {
            case 0:
              if (!set.has([x, y + 1].toString())) {
                position[1] += 1
              }
              break
            case 1:
              if (!set.has([x + 1, y].toString())) {
                position[0] += 1
              }
              break
            case 2:
              if (!set.has([x, y - 1].toString())) {
                position[1] -= 1
              }
              break
            case 3:
              if (!set.has([x - 1, y].toString())) {
                position[0] -= 1
              }
              break
          }
        }
        break
    }
    const distance = position.reduce((prev, cur) => (prev += cur ** 2), 0)
    return distance > max ? distance : max
  }, 0)
  return res
}

console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]]))
