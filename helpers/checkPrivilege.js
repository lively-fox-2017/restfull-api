module.exports = function(req, res, next) {
  let adminPrivilegeArr = ["^\/api/users.*$"]
  let userPrivilegeArr = ["^\/api/users\/.*"]
  let adminPrivilege = new RegExp(adminPrivilegeArr.join("|"));
  let userPrivilege = new RegExp(userPrivilegeArr.join("|"));
  console.log(adminPrivilege.test(req.baseUrl), req.baseUrl);
  switch (req.decoded.data.role) {
    case 'admin':
      switch (req.method) {
        case 'GET':
          if (adminPrivilege.test(req.baseUrl))
            next();
          else
            res.status(401).json({
              message: 'Token unauthorized'
            });
          break;
        case 'POST':
          next();
          break;
        case 'PUT':
          next();
          break;
        case 'DELETE':
          next();
          break;
      }
      break;
    case 'user':
      switch (req.method) {
        case 'GET':
          if (userPrivilege.test(req.baseUrl))
            next();
          else
            res.status(401).json({
              message: 'Token unauthorized'
            });
          break;
        case 'POST':
        case 'PUT':
        case 'DELETE':
          res.status(401).json({
            message: 'Token unauthorized'
          });
          break;
      }
      break;
  }
};
