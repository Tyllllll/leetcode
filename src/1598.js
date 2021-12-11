/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let steps = 0
  for (const str of logs) {
    switch (str) {
      case '../':
        if (steps > 0) {
          steps--
        }
        break
      case './':
        break
      default:
        steps++
        break
    }
  }
  return steps
}
