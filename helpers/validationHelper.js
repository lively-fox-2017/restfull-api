function validate(data, action) {
  var error = {
    name: "Controller Validation Error",
    errors: []
  };
  var baba = JSON.parse(JSON.stringify(data))
  data = baba;

  switch(action){
    case 'create':
      checkUsername();
      checkPassword();
      checkFirstName();
      checkLastName();
      checkEmail();
      checkRole();
    break;
    case 'readOne':
      checkId();
    break;
    case 'update':
      checkId();
    break;
    case 'destroy':
      checkId();
    break;
  }

  function checkId() {
    if (data.hasOwnProperty('id')) {
      if (isNaN(data.id)) {
        let temp = {
          message: `id must be a number`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `id param is missing\nparam : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }
  function checkUsername() {
    if (data.hasOwnProperty('username')) {
      if (/\S/.test(data.username)) {
        let temp = {
          message: `You must fill username`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `username param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }

  function checkPassword() {
    if (data.hasOwnProperty('password')) {
      if (/\S/.test(data.password)) {

      } else {
        let temp = {
          message: `You must fill password`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    }else {
      let temp = {
        message: `password param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }

  function checkFirstName() {
    if (data.hasOwnProperty('firstName')) {
      if (/\S/.test(data.firstName)) {

      } else {
        let temp = {
          message: `You must fill firstName`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `firstName param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }

  function checkLastName() {
    if (data.hasOwnProperty('lastName')) {
      if (/\S/.test(data.lastName)) {

      } else {
        let temp = {
          message: `You must fill lastName`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `lastName param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }

  function checkEmail() {
    if (data.hasOwnProperty('email')) {
      if (/\S/.test(data.email)) {

      } else {
        let temp = {
          message: `You must fill email`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `email param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }

  function checkRole() {
    if (data.hasOwnProperty('role')) {
      if (/\S/.test(data.role)) {

      } else {
        let temp = {
          message: `Role param can't be null or empty`,
          type: `Validation Error`
        }
        error.errors.push(temp)
      }
    } else {
      let temp = {
        message: `role param is missing\n param : username, password, firstName, lastName, email, role`,
        type: `Validation Error`
      }
      error.errors.push(temp)
    }
  }
  return error;
}

module.exports = validate;
