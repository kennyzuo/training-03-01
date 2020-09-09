class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    if (typeof data !== "object") return

    Reflect.ownKeys(data).forEach((key) => {
      this.defineReactive(data, key, data[key])
    })
  }
  defineReactive(data, key, val) {
    const that = this;
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return val
      },
      set(value) {
        if (value === val) return
        val = value
        that.walk(value);
      },
    })

    this.walk(val)
  }
}
