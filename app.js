const express=require("express")
const app=express()
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})
var port=process.env.PORT||3000
app.listen(port,function(){
  console.log("server started running");
})
