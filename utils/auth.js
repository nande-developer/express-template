const bcrypt = require('bcrypt');
const util = require('util');
const AuthConfig = require('../configs/auth');
const ColorHelper = require('./color');

class AuthHelper {
  /**
   *
   * @param name
   * @param size
   * @param background
   * @param color
   * @returns {string}
   */
  generateAvatarByName(name, size = 128, background = null, color = null) {
    return util.format(
      AuthConfig.third_party.avatar, encodeURIComponent(name),
      size,
      background ?? ColorHelper.generateRandomColor(name, 'dark', false),
      color ?? ColorHelper.generateRandomColor(name, 'light', false)
    )
  }
  
  /**
   *
   * @param {string} plainText
   * @returns {string}
   */
  hashPassword(plainText) {
    return bcrypt.hashSync(plainText, 10)
  }
  
  /**
   *
   * @param {string} plainText
   * @param {string} encryptedData
   * @returns {boolean}
   */
  comparePassword(plainText, encryptedData) {
    return bcrypt.compareSync(plainText, encryptedData)
  }
}

module.exports = new AuthHelper()
