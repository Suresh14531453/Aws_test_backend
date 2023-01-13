const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hi all")
})
app.listen(8080,()=>{
    console.log("app running at 8080")
})