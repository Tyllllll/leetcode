/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function (code) {
  if (code[0] !== '<' || code[1] === '!') {
    return false
  }
  const stack = []
  const cdataBegin = '[CDATA['
  const cdataEnd = ']]>'
  let tagName = ''
  let cdataEndTemp = ''
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '<') {
      i++
      if (code[i] === '!') {
        // 这里是cdata
        i++
        // cdata前段
        for (let j = 0; j < cdataBegin.length; j++, i++) {
          if (code[i] !== cdataBegin[j]) {
            // cdata前段格式不符
            return false
          }
        }
        // cdata后段
        cdataEndTemp = ''
        while (cdataEndTemp !== cdataEnd && i < code.length) {
          if (code[i] === ']' || cdataEndTemp[0] === ']') {
            cdataEndTemp += code[i]
          }
          if (cdataEndTemp[cdataEndTemp.length - 1] !== cdataEnd[cdataEndTemp.length - 1]) {
            cdataEndTemp = ''
          }
          i++
        }
        i--
      } else if (code[i] === '/') {
        // 这里是标签结束
        i++
        tagName = ''
        while (code[i] !== '>') {
          if (code[i].charCodeAt() < 65 || code[i].charCodeAt() > 90) {
            // 不是大写字母
            return false
          }
          tagName += code[i]
          i++
        }
        if (tagName.length < 1 || tagName.length > 9) {
          // 长度不合法
          return false
        }
        if (tagName !== stack[stack.length - 1]) {
          // 标签不闭合
          return false
        }
        stack.pop()
        if (!stack.length && i !== code.length - 1) {
          // 最后一个标签闭合首标签
          return false
        }
      } else {
        // 这里是标签开始
        tagName = ''
        while (code[i] !== '>' && i < code.length) {
          if (code[i].charCodeAt() < 65 || code[i].charCodeAt() > 90) {
            // 不是大写字母
            return false
          }
          tagName += code[i]
          i++
        }
        if (tagName.length < 1 || tagName.length > 9) {
          // 长度不合法
          return false
        }
        stack.push(tagName)
      }
    }
  }
  return !stack.length
}
