const usersCollection=require('../db').db().collection("users")
const payingCollection=require('../db').db().collection('paying')
const validator=require("validator")

let User=function(data){
this.data=data
this.errors=[]
}
User.prototype.cleanUp3=function(){
    if(typeof(this.data.TeamName)!="string"){
        this.data.TeamName=""
    }
        if(typeof(this.data.name1)!="string"){
            this.data.name1=""
            
        }
        if(typeof(this.data.name2)!="string"){
            this.data.name2=""
            
        }
        if(typeof(this.data.name3)!="string"){
            this.data.name3=""
            
        }

    if(typeof(this.data.age1)!="string"){
        this.data.age1=""
    }
    if(typeof(this.data.age2)!="string"){
        this.data.age2=""
    }
    if(typeof(this.data.age3)!="string"){
        this.data.age3=""
    }
    
    if(typeof(this.data.gender1)!="string"){
            this.data.gender1=""
        }
    if(typeof(this.data.gender2)!="string"){
            this.data.gender2=""
    }
    if(typeof(this.data.gender3)!="string"){
            this.data.gender3=""
    }
    if(typeof(this.data.email1)!="string"){
        this.data.email1=""
    }
    if(typeof(this.data.email2)!="string"){
        this.data.email2=""
    }
    if(typeof(this.data.email3)!="string"){
        this.data.email3=""
    }
    if(typeof(this.data.Tshirtsize1)!="string"){
        this.data.Tshirtsize1=""
    }
    if(typeof(this.data.Tshirtsize2)!="string"){
        this.data.Tshirtsize2=""
    }
    if(typeof(this.data.Tshirtsize3)!="string"){
        this.data.Tshirtsize3=""
    }

    if(typeof(this.data.phoneNo)!="string"){
    this.data.phoneNo=""
     }
    
     this.data={
         TeamName:this.data.TeamName.trim().toLowerCase(),
         name1:this.data.name1.trim().toLowerCase(),
         name2:this.data.name2.trim().toLowerCase(),
         name3:this.data.name3.trim().toLowerCase(),
         email1:this.data.email1.trim().toLowerCase(),
         email2:this.data.email2.trim().toLowerCase(),
         email3:this.data.email3.trim().toLowerCase(),
         gender1:this.data.gender1,
         gender2:this.data.gender2,
         gender3:this.data.gender3,
         age1:this.data.age1.trim(),
         age2:this.data.age2.trim(),
         age3:this.data.age3.trim(),
         Tshirtsize1:this.data.Tshirtsize1,
         Tshirtsize2:this.data.Tshirtsize2,
         Tshirtsize3:this.data.Tshirtsize3,
         phoneNo:this.data.phoneNo.trim(),
     }
}


User.prototype.cleanUp2=function(){
    if(typeof(this.data.TeamName)!="string"){
        this.data.TeamName=""
    }
        if(typeof(this.data.name1)!="string"){
            this.data.name1=""
            
        }
        if(typeof(this.data.name2)!="string"){
            this.data.name2=""
            
        }
       
    if(typeof(this.data.age1)!="string"){
        this.data.age1=""
    }
    if(typeof(this.data.age2)!="string"){
        this.data.age2=""
    }
   
    
    if(typeof(this.data.gender1)!="string"){
            this.data.gender1=""
        }
    if(typeof(this.data.gender2)!="string"){
            this.data.gender2=""
    }
   
    if(typeof(this.data.email1)!="string"){
        this.data.email1=""
    }
    if(typeof(this.data.email2)!="string"){
        this.data.email2=""
    }
    
    if(typeof(this.data.Tshirtsize1)!="string"){
        this.data.Tshirtsize1=""
    }
    if(typeof(this.data.Tshirtsize2)!="string"){
        this.data.Tshirtsize2=""
    }
  
    if(typeof(this.data.phoneNo)!="string"){
    this.data.phoneNo=""
     }
    
     this.data={
         TeamName:this.data.TeamName.trim().toLowerCase(),
         name1:this.data.name1.trim().toLowerCase(),
         name2:this.data.name2.trim().toLowerCase(),
        
         email1:this.data.email1.trim().toLowerCase(),
         email2:this.data.email2.trim().toLowerCase(),
 
         gender1:this.data.gender1,
         gender2:this.data.gender2,
         
         age1:this.data.age1.trim(),
         age2:this.data.age2.trim(),
        
         Tshirtsize1:this.data.Tshirtsize1,
         Tshirtsize2:this.data.Tshirtsize2,
        
         phoneNo:this.data.phoneNo.trim(),
     }
}

///dfghjklkjhgfdfghjklkjhgfdfghjk


User.prototype.cleanUp4=function(){
    if(typeof(this.data.payeename)!="string"){
        this.data.payeename=""
    }
    if(typeof(this.data.email1)!="string"){
        this.data.email1=""
    }
    
  
   
    if(typeof(this.data.phoneNo)!="string"){
    this.data.phoneNo=""
     }
    
     this.data={
         payeename:this.data.payeename.trim().toLowerCase(),
         
        
         email1:this.data.email1.trim().toLowerCase(),
         
         phoneNo:this.data.phoneNo.trim(),
     }
}

User.prototype.cleanUp1=function(){
    if(typeof(this.data.TeamName)!="string"){
        this.data.TeamName=""
    }
        if(typeof(this.data.name1)!="string"){
            this.data.name1=""
            
        }
      

    if(typeof(this.data.age1)!="string"){
        this.data.age1=""
    }
   
    
    if(typeof(this.data.gender1)!="string"){
            this.data.gender1=""
        }
   
    if(typeof(this.data.email1)!="string"){
        this.data.email1=""
    }
    
    if(typeof(this.data.Tshirtsize1)!="string"){
        this.data.Tshirtsize1=""
    }
   
    if(typeof(this.data.phoneNo)!="string"){
    this.data.phoneNo=""
     }
    
     this.data={
         TeamName:this.data.TeamName.trim().toLowerCase(),
         name1:this.data.name1.trim().toLowerCase(),
        
         email1:this.data.email1.trim().toLowerCase(),
        
         gender1:this.data.gender1,
       
         age1:this.data.age1.trim(),
         
         Tshirtsize1:this.data.Tshirtsize1,
         
         phoneNo:this.data.phoneNo.trim(),
     }
}
User.prototype.validate2=function(){
    if(this.data.TeamName==""){
        this.errors.push("you must provide a Team name")
    }
    if(this.data.TeamName!="" && !validator.isAlphanumeric(this.data.TeamName)){
        this.errors.push("Team Name can only conatin letters and numbers")
    }
    
    if(!validator.isEmail(this.data.email1)){
        this.errors.push("you must provide a email address")
    }
    if(!validator.isEmail(this.data.email2)){
        this.errors.push("you must provide a email address")
    }
    if(this.data.phoneNo==""){
        this.errors.push("you must provide a phone number")
    }
    if(this.data.phoneNo.length!=10){
        this.errors.push("you must provide a phone number")
    }
    if(!(this.data.age1.length>0 && this.data.age1.length<3) ){
        this.errors.push("you must provide a valid age")   
    }
    if(!(this.data.age2.length>0 && this.data.age2.length<3) ){
        this.errors.push("you must provide a valid age")   
    }
    if(!parseInt(this.data.age1)){
        this.errors.push("enter a valid age")
    }
    if(!parseInt(this.data.age2)){
        this.errors.push("enter a valid age")
    }
    if(parseInt(this.data.age1)<10 || parseInt(this.data.age1)>24){
        this.errors.push("sorry their is a age limit of 10-24")
    }
    if(parseInt(this.data.age2)<10 || parseInt(this.data.age1)>24){
        this.errors.push("sorry their is a age limit of 10-24")
    }
    if(!parseInt(this.data.phoneNo)){
        
        this.errors.push("you must provide a valid phone number")
    }
    if(this.data.TeamName.length>0 && this.data.TeamName.length<3){
        this.errors.push("Teamname must be a atleast 3 letters")
    }
    if(this.data.TeamName.length>30){
        this.errors.push("Teamname cannot exceed 30 characters")
    }
    
}

User.prototype.validate3=function(){
    if(this.data.TeamName==""){
        this.errors.push("you must provide a Team name")
    }
    if(this.data.TeamName!="" && !validator.isAlphanumeric(this.data.TeamName)){
        this.errors.push("Team Name can only conatin letters and numbers")
    }
    
    if(!validator.isEmail(this.data.email1)){
        this.errors.push("you must provide a email address")
    }
    if(!validator.isEmail(this.data.email2)){
        this.errors.push("you must provide a email address")
    }
    if(!validator.isEmail(this.data.email3)){
        this.errors.push("you must provide a email address")
    }
    if(this.data.phoneNo==""){
        this.errors.push("you must provide a phone number")
    }
    if(this.data.phoneNo.length!=10){
        this.errors.push("you must provide a phone number")
    }
    if(!(this.data.age1.length>0 && this.data.age1.length<3) ){
        this.errors.push("you must provide a valid age")   
    }
    if(!parseInt(this.data.age1)){
        this.errors.push("enter a valid age")
    }
    if(!parseInt(this.data.age2)){
        this.errors.push("enter a valid age")
    }
    if(!parseInt(this.data.age3)){
        this.errors.push("enter a valid age")
    }
    if(parseInt(this.data.age1)<10 || parseInt(this.data.age1)>22){
        this.errors.push("sorry their is a age limit of 10-22")
    }
    if(parseInt(this.data.age2)<10 || parseInt(this.data.age2)>22){
        this.errors.push("sorry their is a age limit of 10-22")
    }
    if(parseInt(this.data.age3)<10 || parseInt(this.data.age3)>22){
        this.errors.push("sorry their is a age limit of 10-22")
    }
    if(!parseInt(this.data.phoneNo)){
        
        this.errors.push("you must provide a valid phone number")
    }
    if(this.data.TeamName.length>0 && this.data.TeamName.length<3){
        this.errors.push("Teamname must be a atleast 3 letters")
    }
    if(this.data.TeamName.length>30){
        this.errors.push("Teamname cannot exceed 30 characters")
    }
    
}
//tdkkkkkkkkkkkkkkkk
User.prototype.validate4=function(){
    if(this.data.payeename==""){
        this.errors.push("you must provide a payee name")
    }
   
    
    if(!validator.isEmail(this.data.email1)){
        this.errors.push("you must provide a email address")
    }
    if(this.data.phoneNo==""){
        this.errors.push("you must provide a phone number")
    }
    if(this.data.phoneNo.length!=10){
        this.errors.push("you must provide a phone number")
    }
   
   
    if(!parseInt(this.data.phoneNo)){
        
        this.errors.push("you must provide a valid phone number")
    }
    if(this.data.payeename.length>0 && this.data.payeename.length<3){
        this.errors.push("payeename must be a atleast 3 letters")
    }
    if(this.data.payeename.length>30){
        this.errors.push("payeename cannot exceed 30 characters")
    }
    
}

User.prototype.validate1=function(){
    if(this.data.TeamName==""){
        this.errors.push("you must provide a Team name")
    }
    if(this.data.TeamName!="" && !validator.isAlphanumeric(this.data.TeamName)){
        this.errors.push("Team Name can only conatin letters and numbers")
    }
    
    if(!validator.isEmail(this.data.email1)){
        this.errors.push("you must provide a email address")
    }
    if(this.data.phoneNo==""){
        this.errors.push("you must provide a phone number")
    }
    if(this.data.phoneNo.length!=10){
        this.errors.push("you must provide a phone number")
    }
    if(!(this.data.age1.length>0 && this.data.age1.length<3) ){
        this.errors.push("you must provide a valid age")   
    }
    if(!parseInt(this.data.age1)){
        this.errors.push("enter valid age!")
    }
    if(parseInt(this.data.age1)<10 || parseInt(this.data.age1)>22){
        this.errors.push("sorry their is a age limit of 10-22")
    }
    if(!parseInt(this.data.phoneNo)){
        
        this.errors.push("you must provide a valid phone number")
    }
    if(this.data.TeamName.length>0 && this.data.TeamName.length<3){
        this.errors.push("Teamname must be a atleast 3 letters")
    }
    if(this.data.TeamName.length>30){
        this.errors.push("Teamname cannot exceed 30 characters")
    }
    
}
User.prototype.regg3=function(){
    //validate user data
    this.cleanUp3()
    this.validate3()

    //step 2 only if no errors save user data into the database
    if(!this.errors.length){
        usersCollection.insertOne(this.data)
    }
}
User.prototype.regg1=function(){
    this.cleanUp1()
    this.validate1()

    if(!this.errors.length){
        usersCollection.insertOne(this.data)
    }
   
}
User.prototype.regg2=function(){
    this.cleanUp2()
    this.validate2()

    if(!this.errors.length){
        usersCollection.insertOne(this.data)
    }
}
User.prototype.paying=function(){
    this.cleanUp4()
    this.validate4()

    if(!this.errors.length){
        payingCollection.insertOne(this.data)
    }
}
module.exports=User