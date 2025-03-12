const http = require('http');
const fs= require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/' || req.url==='/home'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname+"/home.html").pipe(res);//pipe change readeable to writable
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'/about.html').pipe(res);
    }else{
        res.writeHead(404,{'content-type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
})

server.listen(3000);
console.log('server is running on 3000...');