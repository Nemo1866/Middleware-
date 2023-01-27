function checkAge(req,res,next){
let age=req.query.age
if(!age){
    res.send("Please access this page using ?age query and please type your age")
}else if(age<18){
    throw "Age must be greater than 18 to access our page"
}else{
    next()
}
}
module.exports=checkAge