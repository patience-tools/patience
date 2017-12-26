import storage from 'electron-json-storage'

export default {
  get (key) {
    return storage.get(key)
  },
  set (key, value) {
    return new Promise((resolve, reject) => {
      storage.set(key, value, (err) => {
        err ? reject(err) : resolve()
      })
    })
  }
}
