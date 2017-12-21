import Plugin from '~root/lib/Plugin.js'
import Cache from '~root/lib/Cache.js'

export default class TwoComma extends Plugin {
  constructor (options) {
    super()
    this.options = options
    this.cache = Cache.get('TwoComma')
  }
}
