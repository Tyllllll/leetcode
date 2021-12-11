/**
 * 首先，给定1的数量turnedOn，返回10位二进制的所有可能
 * 然后，除去高4位（小时）大于等于11的和低８位大于59的（分钟）
 * 最后，转换成题目要求的字符串
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 10) return []
  if (turnedOn < 1) return ['0:00']

  function backTrace(str, bits1, res) {
    if (str.length == 10) {
      const hour = Number.parseInt(str.slice(0, 4), 2)
      const minite = Number.parseInt(str.slice(4, 10), 2)
      if (bits1 === 0 && hour < 12 && minite < 60)
        res.push(`${hour}:${minite >= 10 ? minite : '0' + minite}`)
      return
    }
    if (bits1 > 0) {
      backTrace(str + '1', bits1 - 1, res)
    }
    backTrace(str + '0', bits1, res)
    return res
  }

  return backTrace('', turnedOn, [])
}

console.log(readBinaryWatch(1))
