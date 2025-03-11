const fs=require('fs');
fs.readFile('file.txt',"utf-8",(a,b)=>{
    console.log(a,b);
});
console.log("reading file.......");