// emailValidator is a async method, require a parameter with value email-address(string)
// It's a promise. Use method .then to get the value
const emailValidator = require('../helpers/emailValidationAPI')

module.exports = (req, res, next) => {
  emailValidator(req.body.email) 
    .then(data => {
      // console.log(data)
      if (data.ValidAddress) next()
      else {
        next({
          msg: 'email is not valid. please use a valid email', 
          status: 'bad_request',
          joke: 'Are You a robot ? or input Dummy email ?'
        })
      }
    })
    .catch(next)
}