/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return []
  const obj = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  const lookUpArray = []
  for (let i = 0; i < digits.length; i++) {
    const element = digits[i]
    lookUpArray.push(obj[element])
  }

  function dfs(str, num) {
    if (num === digits.length) {
      ans.push(str)
      return
    }
    for (let i = 0; i < lookUpArray[num].length; i++) {
      const element = lookUpArray[num][i]
      dfs(str + element, num + 1)
    }
  }

  const ans = []
  dfs('', 0)
  return ans
}

console.log(letterCombinations(''))
