const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	if (req.headers.hasOwnProperty('token')) {
		jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) {
				res.status(500).send(err);
			} else if (['admin', 'user'].indexOf(decoded.role) !== -1) { 
				next();
			} else {
				res.status(401).send({
					status: 401,
					message: 'Unauthorized: You do not have access to this feature. Sign up/Sign in.'
				});
			}
		});
	} else {
		res.status(401).send({
			status: 401,
			message: 'Unauthorized: You do not have access to this feature. Sign up/Sign in.'
		});
	}
}