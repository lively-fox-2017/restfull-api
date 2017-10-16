const model = require('../models')
const tools = require('../helper/tools')
const jwt = require('jsonwebtoken')

class Login {
	static login(req,res) {
		model.User.findOne({where:{username:req.body.username}})
		.then(user => {
			if(req.body.username == user.username && user.password == tools.cryptor(req.body.password,user.salt)) {
				let dataUser = {
					username:user.username,
					role:user.role
				}
				var token = jwt.sign(dataUser, 'cuma nama')
				res.json({
					username:user.username,
					token:token
				})
			} else {
				res.send("Login gagal, username dan password tidak sesuai!")
			}
		})
		.catch(err => {
			res.send("Login gagal, anda belum terdaftar!")
		})
	}
}
module.exports = Login