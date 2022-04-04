const AuthHelper = require('../../utils/auth');

test('Generate avatar from third party', () => {
  expect(typeof AuthHelper.generateAvatarByName('Miqdad Yanuar Farcha')).toBe('string');
})

test('Hash bcrypt', () => {
  const plain = 'secretpassword';
  expect(typeof AuthHelper.hashPassword(plain)).toBe('string');
})

test('Compare bcrypt', () => {
  const plain = 'secretpassword';
  const hash = '$2b$10$bum.0WxQwf68XFUFXxtc4.9kJtDv9F2iZoHB9K79Ddb8JJNM2Ro3G';
  expect(AuthHelper.comparePassword(plain, hash)).toBe(true);
})
