module.exports = (req, res, next) => {
	if (req.authorization) {
		if (Number(req.params.id) === req.authorization.id || req.authorization.role === 'admin') {
			next();
		} else {
			res.status(401).send({
				message: 'Unauthorized: You do not have access to this feature. Sign up/Sign in to get access token'
			});
		}
	} else {
		res.status(401).send({
			message: 'Unauthorized: You do not have access to this feature. Sign up/Sign in to get access token'
		});
	}
}