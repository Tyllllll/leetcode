/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
  let length = 0
  for (let i = 0; i < S.length; i++) {
    if (S[i].match(/\d/)) {
      length *= parseInt(S[i])
    } else {
      length += 1
    }
    if (length >= K) {
      S = S.substr(0, i + 1)
      break
    }
  }
  for (let i = S.length - 1; i >= 0; i--) {
    K %= length
    if (0 === K && S[i].match(/\D/)) {
      return S[i]
    }
    if (S[i].match(/\d/)) {
      length /= parseInt(S[i])
    } else {
      length -= 1
    }
  }
}
