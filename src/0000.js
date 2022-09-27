let wait = 300
let canRun = true

function jieliu(fn, wait) {
  if (!canRun) {
    return
  }
  canRun = false
  setTimeout(() => {
    fn()
    canRun = ture
  }, wait)
}

let timerid = false
function debounce(fn, wait) {
  clearTimeout(timerid)
  setTimeout(() => {
    fn()
  }, wait)
}
