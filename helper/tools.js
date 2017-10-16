const cryptorjs = require('cryptorjs');
const jwt = require('jsonwebtoken')
class Tools {
	static rand(){
		let txt = ''
		let char = 'abcdefghijklmnopqrstuvwxyz1234567890'
		for(let i = 0;i < 10;i++){
			txt += char.charAt(Math.floor(Math.random()*char.length))
		}
		return txt
	}
	static cryptor(pass,salt){
		let newPass = salt+pass
	    let Encrypt = new cryptorjs(salt);
	    let encoded = Encrypt.encode(newPass);
	    return encoded;
	}
	static isLogin(req,res,next) {
		let token = req.headers.token
		if(token) {
			jwt.verify(token, 'cuma nama', function (err,decoded){
				if(err) {
					res.send('Login gagal')
				} else {
					if(decoded.role == 'admin') {
						next()
					} else {
						res.send('Sorry bro...anda tidak punya hak kases!')
					}
				}
			})

		} else {
			res.send('Silahkan login dulu kang!')
		}
	}

}

module.exports = Tools