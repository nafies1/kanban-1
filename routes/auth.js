const router = require('express').Router()
const User = require('../controllers/userController')
const emailValidation = require('../middlewares/emailValidation')

router.post('/register', emailValidation ,User.register)

module.exports = router