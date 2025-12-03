function Token(req,res,next){
    // console.log(req.url); // we can access req,res here
    console.log('Creating Token');  
    // const TOKEN = '123';
    req.token = true;
    next();
}

module.exports = { Token }