const router = require('express').Router()

const { register, login, logout, userDetails } = require('../services/user')

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/UserDetails', userDetails)




module.exports = router