const fs=require('fs');
fs.readFile('file.txt',"utf-8",(err,data)=>{
    console.log(err,data);
});
console.log("reading file.......");