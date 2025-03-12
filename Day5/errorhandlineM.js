const express= require('express')
const app=express();

//regular middleware
app.get('/error',(req,res,next)=>{
    const err= new Error('something went wrong');
    next(err);
})

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).send('internal server error');
})

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.listen(3000,()=>console.log("server running on 3000..."));