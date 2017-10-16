const model = require('../models')

class SignUp{
    static signUp(req, res){
        model.User.create({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        })
        .then(row => {
            res.send(row)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = SignUp;
