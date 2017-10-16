const model = require('../models')
const tools = require('../helper/tools')
class Signup {
	static signup(req,res) {
		let salt = tools.rand()
		let password = tools.cryptor(req.body.password, salt)
		let input = {
			username:req.body.username,
			password:password,
			salt:salt,
			role:req.body.role
		}
		model.User.create(input).then(add => {
			res.send("Create suksess, please login!")
		})
	}
}
module.exports = Signup