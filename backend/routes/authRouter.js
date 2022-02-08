const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.register)

router.post('/signin', authController.login)

router.post('/logout', authController.logout)

router.post('/refresh_token', authController.generateAccessToken)
router.get('/test',(req,res)=>res.send('hello'))
module.exports = router
