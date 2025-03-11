const fs = require('fs');//writing to file asynchronously
fs.writeFile('file.txt',"this is test file",(err)=>{
    if(err){
        console.log("error writing file: ",err);
    }
    console.log("written successfully.")
});
console.log("writing to a file");
