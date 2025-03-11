const fs=require('fs');
fs.readFile('file.txt',"utf-8",(err,data)=>{
    if(err){
        console.log("error reading file:",err);
    }
    console.log(data);

});
console.log("reading file.......");