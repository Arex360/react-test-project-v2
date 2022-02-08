const {initializeApp} = require('firebase/app')
const {getDatabase,ref,set,push,onValue, get} = require('firebase/database')
const firebaseConfig = {
    apiKey: "AIzaSyD9MCBrJEG4XuqUtGSCdYagooQZOmC9kMQ",
  authDomain: "testreactapp-f7b2c.firebaseapp.com",
  projectId: "testreactapp-f7b2c",
  storageBucket: "testreactapp-f7b2c.appspot.com",
  messagingSenderId: "134989082982",
  appId: "1:134989082982:web:fb9aa24e507062d6a158a7",
  measurementId: "G-NLLKXM0M2L"
};
let fApp = initializeApp(firebaseConfig)
let Database = getDatabase(fApp)
const router = require('express').Router()
const authController = require('../controllers/authController')

router.post('/signup', authController.register)

router.post('/signin', authController.login)

router.post('/logout', authController.logout)

router.post('/refresh_token', authController.generateAccessToken)
router.post('/videos',(req,res)=>{
    let {username,actor,text,alignment,background,voice} = req.body
    console.log(req.body)
    push(ref(Database,username),req.body)
    res.send('hello')
})
router.get('/vid/:username',(req,res)=>{
    const {username} = req.params
    get(ref(Database,username)).then(result=>{
        result = result.val()
        console.log(result)
        res.send(result)
    })
})
router.get('/test',(req,res)=>res.send('hello'))
module.exports = router
