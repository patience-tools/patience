import storage from 'electron-json-storage'

export default class Cache {
  constructor (options) {
    this.options = options
  }

  get (key) {
    return storage.get(key)
  }

  set (key, value) {
    return new Promise((resolve, reject) => {
      storage.set(key, value, (err) => {
        err ? reject(err) : resolve()
      })
    })
  }
}
