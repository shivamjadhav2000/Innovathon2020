const express=require('express')
const app=express()




const router=require('./router')

app.use(express.urlencoded({extended:false}))//express enables the user submitted data to access on req object
app.use(express.json())//express helps to convert submitted data to an object
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/',router)


module.exports=app