const model = require('../models');
const key = 'enkripsinya'
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

class User{
    static findAll(req, res){
        // console.log(req.headers);
        jwt.verify(req.headers.token, key, function (err, decoded) {
            // console.log(decoded) // bar
            if (err){
                res.send(err)
            } else {
                console.log(decoded);
                if(decoded.role == 'admin'){
                    model.User.findAll()
                        .then(rows=>{
                            res.send(rows)
                        })
                        .catch(err=>{
                            res.send(err)
                        })
                } else if (decoded.role == 'user') {
                    model.User.findOne({
                        where: {
                            username:decoded.username
                        }
                    })
                    .then(row=>{
                        res.send(row)
                    })
                    .catch(err=>{
                        res.send(err)
                    })
                }
            }
        });

    }

    static findById(req, res){
        model.User.findById(req.params.id)
        .then(row=>{
            res.send(row)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static update(req, res){
        var salt = bcrypt.genSaltSync(10)
        var password = bcrypt.hashSync(req.body.password, salt)
        let hashpassword = password
        model.User.update({
            username: req.body.username,
            password: hashpassword,
            role: req.body.role,
            salt: salt
        },{
            where: {
                id : req.params.id
            }
        })
        .then(()=>{
            res.send('user berhasil di update')
        })
        .catch(err=>{ 
            res.send(err)
        })
        
    }

    static delete(req, res){
        model.User.destroy({where:{id:req.params.id}})
        .then(()=>{
            res.send('data sudah dihapus')
        })
        .catch(err=>{
            res.send(err)
        })
    }

}

module.exports = User;
