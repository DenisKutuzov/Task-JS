// Используя setInterval

function printNumbers(from, to) {
  let timer = setInterval(() => {
    if (from <= to) {
      console.log(from)
      from++
    } else {
      clearInterval(timer)
    }
  }, 1000)
}

// printNumbers(2, 7)

// Используя рекурсивный setTimeout

function printNumbers2(from, to) {
  let timer = setTimeout(function tick() {
    if (from <= to) {
      console.log(from)
      from++
      timer = setTimeout(tick, 1000)
    }
  }, 1000)
}

printNumbers2(2, 7)
