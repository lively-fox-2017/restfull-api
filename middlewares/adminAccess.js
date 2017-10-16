const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	if (req.headers.hasOwnProperty('token')) {
		jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
			if (err) {
				res.send(err);
			} else if (decoded.role === 'admin') {
				next();
			} else {
				res.status(401).send({
					message: 'Unauthorized: You do not have access to this feature.'
				});
			}
		});
	} else {
		res.status(401).send({
			message: 'Unauthorized: You do not have access to this feature. Sign up/Sign in.'
		});
	}
}