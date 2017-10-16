const models = require('../models')
var jwt = require('jsonwebtoken')
class Api {

    static index(req,res) {
        res.send(req.headers.token)
    }

    static login(req,res) {
        res.render('login')
    }

    static register(req,res) {
        res.render('register')
    }

    static getUser(req,res) {
            models.User.findAll()
            .then(data => {
                res.send(data)
            })
    }

    static getUserById(req,res) {
            models.User.findOne({
                where: {
                    id: `${req.params.id}`
                }
            })
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static createUser(req,res) {
        var auth = false
        var admin = false
        if(req.body.auth === 'auth') {
            auth = true
        }

        if(req.body.admin === 'admin') {
            admin = true
        }
        // res.send(req.body)
        console.log(auth)
        console.log(admin)
        models.User.create({
            name: `${req.body.name}`,
            password: `${req.body.password}`,
            auth: auth,
            admin: admin
        })
        .then(() => {
            res.send('sign up success')
        })
    }

    static deleteUser(req,res) {
            models.User.destroy({
                where: {
                    id: `${req.params.id}`
                }
            })
            .then(data => {
                res.send('delete success')
            })
    }

    static createUserAdmin(req,res) {
            var auth = false
            var admin = false
            if(req.headers.auth === 'auth') {
                auth = true
            }
    
            if(req.headers.admin === 'admin') {
                admin = true
            }
            // res.send(req.body)
            console.log(auth)
            console.log(admin)
            models.User.create({
                name: `${req.headers.name}`,
                password: `${req.headers.password}`,
                auth: auth,
                admin: admin
            })
            .then(() => {
                res.send('Add user success')
            })
    }

    static loginUser(req,res) {
        models.User.findOne({
            where: {
                name: `${req.body.name}`,
                password: `${req.body.password}`
            }
        })
        .then(user => {
            if(user.name !== undefined) {
                var token = jwt.sign({name: `${user.name}`, admin: `${user.admin}`, auth: `${user.auth}`}, 'secret')
                req.headers.token = token
                res.send(req.headers.token)
            }
        })
    }

    static hasLogin(req,res,next) {
        if(req.headers.token) {
            next()
        } else {
            res.send('Please login')
        }
    }

    static roleAdmin(req,res,next) {
        jwt.verify(req.headers.token, 'secret', function(err,decoded) {
            console.log(decoded)
            if(decoded.admin) {
                next()
            } else {
                res.send('Only admins can access this page')
            }
        })
    }
}

module.exports = Api