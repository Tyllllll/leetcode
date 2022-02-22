/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0]
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] > minPrice ? prices[i] - minPrice : 0
    minPrice = prices[i] < minPrice ? prices[i] : minPrice
    maxProfit = profit > maxProfit ? profit : maxProfit
  }
  return maxProfit
}
export default maxProfit
