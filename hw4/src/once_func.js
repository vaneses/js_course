export function joinedArgs() {
  return [].join.call(arguments, ', ')
}

export function once(func) {
  var counter = 0
  var bound = 1
  return function() {
    if (counter < bound) {
      counter += 1
      return func.apply(null, arguments)
    }
  }
}
