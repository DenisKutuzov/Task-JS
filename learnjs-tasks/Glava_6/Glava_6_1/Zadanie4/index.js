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

// Решение с рекурсией

function printList(list) {
  if (list.next !== null) {
    console.log(list.value)
    printList(list.next)
  } else {
    console.log(list.value)
  }
}

printList(list)

// Решение циклом

function printListWhile(list) {
  let a = list

  while (a) {
    console.log(a.value)
    a = a.next
  }
}

printListWhile(list)
