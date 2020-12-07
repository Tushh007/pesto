const flipped = (...args) => () => args.reverse()

let flip = flipped('a', 'b', 'c', 'd')

console.log(flip())