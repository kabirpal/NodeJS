const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname,'files');
const filename = `${dirname}/hello0.txt`;


//Reading file
// fs.readFile(filename,'utf8',(err,item)=>{
//     console.log(item);
// })


//appending in file
// fs.appendFile(filename,' and the text has been updated',(err)=>{
//     if(!err)console.log('File has been updated')
// });


//remaning the file

fs.rename(filename,`${dirname}/apple.txt`,(err)=>{
    if(!err) console.log('File name has been renamed')
})