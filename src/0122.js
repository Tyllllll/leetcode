/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) {
    return 0
  }

  let res = 0
  let buyIn = prices[0]

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyIn) {
      buyIn = prices[i]
    } else {
      while (i + 1 < prices.length && prices[i + 1] > prices[i]) {
        i++
      }
      res += prices[i] - buyIn
      buyIn = prices[i]
    }
  }
  return res
}
