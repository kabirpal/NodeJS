module.exports = (req, resp, next)=>{
    //console.log('age filter')
    if(!req.query.age){
        resp.send('Please Enter your age');
    }
    else if( req.query.age<18){
        resp.send('Your age is enough to access the Page')
    }
    else{
        next();
    }
    
}