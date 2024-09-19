const express = require('express')
const {signupUser, loginUser, userProfile } = require('../controllers/userController')
const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/', userProfile)


module.exports = (router);