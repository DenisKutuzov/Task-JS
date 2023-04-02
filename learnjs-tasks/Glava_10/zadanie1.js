class FormatError extends SyntaxError {
  constructor(message) {
    super(message)
    this.name = 'FormatError'
  }
}

let err = new FormatError('ошибка форматирования')

console.los(err.message) // ошибка форматирования
console.los(err.name) // FormatError
console.los(err.stack) // stack

console.los(err instanceof SyntaxError) // true
