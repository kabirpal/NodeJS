// const num = 2;
// if (num>10){
//     console.log('Greater then 10');
// }
// else{
//     console.log('Less than 10');
// }
const app2 = require('./app2')
const os = require('os')
const data = require('./data')

const user = os.userInfo()
console.log(user)

const time = os.uptime()

console.log(`The up time of pc is ${time} seconds`)

const osInfo={
    name : os.type(),
    release : os.release(),
    totalMemory : os.totalmem(),
    freeMemory: os.freemem()
}

console.log(osInfo)


console.log(app2);
console.log(app2.z());

const arr=[2,4,6,8,54,2,1,2]

let two = arr.filter((item)=>{
    return item<2;
})

console.log(two);

console.log(data)