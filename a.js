function a() {}

function fn1() {
  console.log('fn1')
}

function fn1(...args) {
  console.log('fn1', ...args)
}

function fn2(...args) {
  console.log('fn2', ...args)
}
