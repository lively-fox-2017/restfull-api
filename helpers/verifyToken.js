const jwt = require('jsonwebtoken');

module.exports = (token) => {

  if (!token)
    return 0;

  const loggedInUser = jwt.verify(token, 'rest-api-secret');

  if (loggedInUser)
    return loggedInUser;

  return 0;

};
