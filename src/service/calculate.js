
const sum = (...args) => {
  return args.reduce((sum, cur) => {
    return sum + cur
  }, 0)
}

export {sum}
