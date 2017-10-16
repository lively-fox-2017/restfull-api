const models = require('../models');
const errorHandling = require('./../helpers/errorHandling');

class User {
	static getAll(req, res) {
		models.User.findAll()
		.then(users => {
			res.status(200).send(users);
		})
		.catch(err => {
			err = errorHandling(err);

			res.send(err);
		});
	}

	static getOne(req, res) {
		const options = {
			where: {id: req.params.id}
		};

		models.User.findOne(options)
		.then(user => {
			if (user) {
				res.status(200).send(user);
			} else {
				let error = new Error();
				error.status = 404;
				error.message = 'No user with such ID';
				return Promise.reject(error);
			}
		})
		.catch(err => {
			err = errorHandling(err);

			res.send(err);
		});
	}

	static create(req, res) {
		const values = {
			username: req.body.username,
			password: req.body.password,
			role: req.body.role,
			createdAt: new Date(),
			updatedAt: new Date()
		};

		models.User.create(values)
		.then(() => {
			res.status(201).send({
				message: `User created`,
				values: values
			});
		})
		.catch(err => {
			err = errorHandling(err);

			res.send(err);
		})
	}

	static delete(req, res) {
		const options = {
			where: {id: req.params.id}
		};

		models.User.destroy(options)
		.then(numDestroyed => {
			if (numDestroyed > 0) {
				res.status(200).send(`Id: ${req.params.id} successfully deleted`);
			} else {
				let error = new Error();
				error.status = 404;
				error.message = 'No user with such ID';
				return Promise.reject(error);
			}
		})
		.catch(err => {
			err = errorHandling(err);

			res.send(err);
		})
	}

	static update(req, res) {
		const options = {
			where: {id: req.params.id},
			individualHooks: true
		};
		let values = {
			username: req.body.username,
			password: req.body.password,
			role: req.body.role,
			updatedAt: new Date()
		};

		models.User.update(values, options)
		.then(numAffected => {
			if (numAffected[0] > 0) {
				res.status(200).send(`Id: ${req.params.id} Successfully updated`);
			} else {
				let error = new Error();
				error.status = 404;
				error.message = 'No user with such ID';
				return Promise.reject(error);
			}
		})
		.catch(err => {
			err = errorHandling(err);

			res.send(err);
		});
	}
}

module.exports = User;