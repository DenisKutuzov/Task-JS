// С использованием цикла.

function sumTo(n) {
  let sum = 0
  while (n > 0) {
    sum += n
    n--
  }
  return sum
}

console.log(sumTo(100))

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumToRecursia(n) {
  if (n > 0) {
    sum = n + sumTo(n - 1)
  }
  return sum
}

console.log(sumToRecursia(100))

// С использованием формулы арифметической прогрессии. Самый быстрый 

function sumToArif(n) {
  return (n * (n + 1)) / 2
}

console.log(sumToArif(100))
