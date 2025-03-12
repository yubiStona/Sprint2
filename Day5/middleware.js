const express= require('express');
const fs=require('fs');
const app=express();

app.use((req,res,next)=>{
    fs.appendFile(
        "log.txt",
        `\n${Date.now()}:${req.method}.${req.path}`,
        (err,data)=>{
            next();
        }
    );
})

app.use((req,res,next)=>{
    console.log('Time: ',Date.now())
    next()
})

app.use('/user', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
  })

app.listen(3000,()=>{
    console.log('server is running on 3000...');
})