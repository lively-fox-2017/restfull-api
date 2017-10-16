const crypto = require('crypto');

function getHash(password) {
  return crypto.createHmac('sha256', process.env.SALT_KEY).update(password).digest('hex');
}

module.exports = getHash;
