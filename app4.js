// creating multiple files
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","A simple text file")
// }

fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(`File name is ${item}`)
    })
})



// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log('Invalid input')
// }