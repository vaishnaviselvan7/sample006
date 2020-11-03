var express=require('express');
var app=express();

app.get('/test',function(req,res)
{res.send("Hello vaishu");
});
app.listen(3000,function()
{
    console.log("listening")
});