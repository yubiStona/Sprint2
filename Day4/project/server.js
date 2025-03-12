const express= require('express');
const path=require('path');
const app=express();

//defining a route to serve html file;
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','home.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','about.html'));
})

app.get('/users',(req,res)=>{
    res.send({data:"user created"});
})

app.listen(3000,()=>{
    console.log('server is running on 3000...');
})