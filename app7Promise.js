let a = 10;
let b = 10;

console.log(a+b)

let waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(20);
    },2000)    
})

waitingData.then((data)=>{
    console.log(a+data);
})
