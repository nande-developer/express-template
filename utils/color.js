const RandomColor = require('randomcolor');

class ColorHelper {
  generateRandomColor(seed = null, type = 'light', withTag = true) {
    const color = RandomColor({
      luminosity: type,
      seed: seed ? seed : 'default'
    }).toString()
    return !withTag ? color.replace('#', '') : color
  }
}

module.exports = new ColorHelper()
