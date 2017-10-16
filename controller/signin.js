const model = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const key = 'enkripsinya'

class SignIn {
    static signIn(req, res, next) {
        model.User.findOne({
            where:{
                username: req.body.username
            }
        })
        .then(dataUser=>{
            // console.log(dataUser);
            if (dataUser == null){
                res.send('masukkan username yang tepat')
            } else {
                var hashPassword = bcrypt.hashSync(req.body.password, dataUser.salt)

                if (dataUser.password === hashPassword && dataUser.username === req.body.username){
                    var payload = {
                        exp: Math.floor(Date.now() / 1000) + (60*60),
                        username: dataUser.username,
                        role: dataUser.role
                    }
                    var token = jwt.sign(payload, key);
                    req.headers.token = token
                    // console.log(req.headers.token);
                    res.send({
                        message : "data berhasil disimpan",
                        username : dataUser.username,
                        role : dataUser.role,
                        token
                    })
                } else if (dataUser.password !== hashPassword){
                    res.send('password salah')
                }
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = SignIn;