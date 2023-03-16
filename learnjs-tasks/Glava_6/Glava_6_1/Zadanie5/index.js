let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

// Решение циклом

function printListWhile(list) {
  let a = list
  let arr = []

  while (a) {
    arr.push(a.value)
    a = a.next
  }
  console.log(arr.reverse().toString())
}

printListWhile(list)

// Решение с рекурсией

function printList(list) {
  if (list.next) {
    printList(list.next)
  }
  console.log(list.value)
}

printList(list)
