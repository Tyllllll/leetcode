/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {
  let res
  const specialUse = special.filter((package) => {
    const singleCost = price.reduce((sum, cost, index) => sum + cost * package[index], 0)
    const specialCost = package[package.length - 1]
    return singleCost > specialCost
  })
  const dfs = (cost, needs, i) => {
    let couldBuy = false
    for (let j = i; j < specialUse.length; j++) {
      const special = specialUse[j]
      couldBuy = needs.every((val, index) => val >= special[index])
      if (couldBuy) {
        const newNeeds = needs.map((val, index) => val - special[index])
        dfs(cost + special[special.length - 1], newNeeds, j)
      }
    }
    if (!couldBuy) {
      const singleSum = needs.reduce((prev, val, index) => prev + val * price[index], 0)
      const sum = singleSum + cost
      res = res ? Math.min(res, sum) : sum
    }
  }
  dfs(0, needs, 0)
  return res
}
console.log(
  shoppingOffers(
    [2, 3, 4],
    [
      [1, 1, 0, 4],
      [2, 2, 1, 9],
    ],
    [1, 2, 1]
  )
)
