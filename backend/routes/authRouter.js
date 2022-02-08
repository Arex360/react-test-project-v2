const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.register)

router.post('/signin', authController.login)

router.post('/logout', authController.logout)

router.post('/refresh_token', authController.generateAccessToken)
router.post('/videos',(req,res)=>{
    let {username,actor,text,alignment,background,voice} = req.body
    console.log(req.body)
    res.send('hello')
})
router.get('/test',(req,res)=>res.send('hello'))
module.exports = router
