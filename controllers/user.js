const model = require('../models')
const tools = require('../helper/tools')

class User{
	static getAll(req,res){
		model.User.findAll().then(users => {
			res.send(users)
		})
	}
	static getBy(req,res){
		model.User.findById(req.params.id).then(user => {
			res.send(user)
		})
	}
	static add(req,res){
		let salt = tools.rand()
		let password = tools.cryptor(req.body.password, salt)
		let input = {
			username:req.body.username,
			password:password,
			salt:salt,
			role:req.body.role
		}
		model.User.create(input).then(add => {
			res.send("Create suksess!")
		})
	}
	static edit(req,res){
		model.User.update(req.body,{where:{id:req.params.id}}).then(edit => {
			res.send("Edit suksess!")
		})
	}
	static delete(req,res){
		model.User.destroy({where:{id:req.params.id}}).then(del => {
			res.send("delete suksess!")
		})	
	}
}
module.exports = User