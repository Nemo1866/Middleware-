const express=require("express")
const app=express()
const checkAge=require("./middleware")

app.get("/",checkAge,(req,res)=>{
    res.send("<h1> Welcome to Our Page </h1>")
})

app.listen(3000,()=>{
console.log("Server is running on port 3000");
})