const express=require('express')
const router=express.Router()
const userController=require('./controllers/userController')


router.get('/',function(req,res){
    res.render('index')
})

//router.get('/reg',userController.register)
router.post("/registration1",function(req,res){
    res.render('user1')
})
router.post('/registration2',function(req,res){
    res.render('user2')
})
router.post('/registration3',function(req,res){
    res.render('user3')
})

//registering
router.post('/reg1',userController.register1)
router.post('/reg2',userController.register2)
router.post('/reg3',userController.register3)
//payment
router.post('/payment',userController.pay)
module.exports=router