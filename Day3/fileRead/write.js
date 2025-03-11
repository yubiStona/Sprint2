const fs = require('fs');//writing to file asynchronously
fs.writeFile('file.txt',"this is test file",(err)=>{
    if(err) throw err;
    console.log("written successfully.")
});
console.log("writing to a file");
