const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const errorHandling = require('./../helpers/errorHandling');

class Auth {
	static signup(req, res) {
		const values = {
			username: req.body.username,
			password: req.body.password,
			role: req.body.role,
			createdAt: new Date(),
			updatedAt: new Date()
		}

		models.User.create(values)
		.then(() => {
			res.status(201).send({
				message: `${values.username} successfully signed up!`
			});
		})
		.catch(err => {
			err = errorHandling(err);

			res.status(err.status || 500).send(err);
		});
	}

	static signin(req, res) {
		const options = {where: {username: req.body.username}};
		let userData = null;

		models.User.findOne(options)
		.then(user => {
			if (user) {
				userData = user;
				return bcrypt.compare(req.body.password, user.password);
			} else {
				let error = new Error();
				error.status = 401;
				error.message = 'Username not found';
				return Promise.reject(error);
			}
		})
		.then(result => {
			if (result) {
				const data = {
					id: userData.id,
					username: userData.username,
					role: userData.role
				}

				jwt.sign(data, process.env.SECRET_KEY, (err, token) => {
					console.log(token);
					res.status(200).send({
						message: `Sign in success!`,
						token: token
					});
				});
			} else {
				let error = new Error();
				error.status = 401;
				error.message = 'Wrong Password';
				return Promise.reject(error);
			}
		})
		.catch(err => {
			err = errorHandling(err);
			
			res.status(err.status || 500).send(err);
		});
	}
}

module.exports = Auth;