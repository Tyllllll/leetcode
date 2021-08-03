/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const money = {
    5: 0,
    10: 0,
    20: 0,
  }
  for (const i of bills) {
    money[i]++
    switch (i - 5) {
      case 0:
        break
      case 5:
        if (money[5] > 0) {
          money[5] -= 1
        } else {
          return false
        }
        break
      case 15:
        if (money[10] > 0 && money[5]) {
          money[10] -= 1
          money[5] -= 1
        } else if (money[5] > 2) {
          money[5] -= 3
        } else {
          return false
        }
        break
    }
  }
  return true
}
