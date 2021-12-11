/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  const map = {
    '&quot;': '"',
    '&apos;': "'",
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/',
  }
  let result = ''
  let key = ''
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '&') {
      result += key
      key = '&'
    } else {
      key += text[i]
      if (text[i] === ';') {
        result += map[key] || `${key}`
        key = ''
      }
    }
  }
  return result + key
}
