const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

	if (req.headers.hasOwnProperty('token')) {
		jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) {
				if (err.name === 'TokenExpiredError') res.status(401).send(err);
				else if (err.name === 'JsonWebTokenError') res.status(403).send(err);
				else res.status(500).send(err);
			} else {
				req.authorization = {
					id: decoded.id,
					username: decoded.username,
					role: decoded.role
				}
				next();
			}
		});
	} else {
		req.authorization = null;
		next();
	}
}