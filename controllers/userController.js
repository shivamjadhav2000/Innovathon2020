
const User=require('../model/User')

exports.register3=function(req,res){
    let user=new User(req.body)
    user.regg3()
    if(user.errors.length){
        let l=``
        user.errors.forEach(function(i){
            l=l+`${i}`+`<br>`
        })
res.send(l)
        
        
    }
    else{
        res.render('pay')
    }
}
exports.register1=function(req,res){
    let user=new User(req.body)
    user.regg1()
    if(user.errors.length){
       
            let l=``
            user.errors.forEach(function(i){
                l=l+`${i}`+`<br>`
            })
    res.send(l)
        
     

    }
    else{

        res.render('pay')

    }
}
exports.pay=function(req,res){
    let user=new User(req.body)
    user.paying()
    if(user.errors.length){
        let l=``
        user.errors.forEach(function(i){
            l=l+`${i}`+`<br>`
        })
res.send(l)
    }
    else{
        
        
        res.redirect('/')
    }
}

exports.register2=function(req,res){
    let user=new User(req.body)
    user.regg2()
    if(user.errors.length){
        let l=``
        user.errors.forEach(function(i){
            l=l+`${i}`+`<br>`
        })
res.send(l)
    }
    else{

res.render('pay')


    }
}
