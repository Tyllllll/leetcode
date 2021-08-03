/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.replace(/\s+$/, '').split(/\s+/).pop().length
}
