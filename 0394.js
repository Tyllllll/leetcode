/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  while (s.indexOf('[') > 0) {
    s = s.replace(/(\d+)\[(\w+)]/g, (str, times, subStr) => subStr.repeat(times))
  }
  return s
}
