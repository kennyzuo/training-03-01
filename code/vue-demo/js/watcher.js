class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    this.oldvalue = vm[key]
  }
  update() {
    let newValue = this.vm[this.key]
    if (newValue !== this.oldvalue) {
      this.cb(newValue)
    }
  }
}
