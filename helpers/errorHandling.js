module.exports = (err) => {
	if (err.name && err.name === 'SequelizeValidationError' || 
					err.name === 'SequelizeUniqueConstraintError'){
				err.status = 409;
			}
				
	return err;
}