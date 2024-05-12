module.exports={
    x:10,
    y:200,
    z:function(){
        return 100;
    }
}

const fs = require('fs');

fs.writeFileSync('helloWorld.txt','learning node js');