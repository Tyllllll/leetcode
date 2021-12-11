/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let indexS = S.length - 1
  let indexT = T.length - 1
  let skip = 0
  while (indexS >= 0 || indexT >= 0) {
    if (S[indexS] !== '#' && T[indexT] !== '#') {
      if (S[indexS] !== T[indexT]) {
        return false
      }
      indexS--
      indexT--
    } else {
      skip = 0
      while (S[indexS] === '#' || skip) {
        if (S[indexS] === '#') {
          skip++
          indexS--
        } else {
          skip--
          indexS--
        }
      }
      skip = 0
      while (T[indexT] === '#' || skip) {
        if (T[indexT] === '#') {
          skip++
          indexT--
        } else {
          skip--
          indexT--
        }
      }
    }
  }
  return true
}
