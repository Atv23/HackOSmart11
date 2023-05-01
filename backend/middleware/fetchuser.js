const jwt = require('jsonwebtoken');
const JWT_secret = "Vaibhav@2110"

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token');
    // console.log(token)
    if(!token){
        res.status(401).send({error:"Access denied"});
        // return;
    }
    try {
        // console.log(token)
        const data = jwt.verify(token,JWT_secret);
        console.log(data)
        req.user = data.user;
        // console.log(data)
        next(); //it will call the next middleware
    } catch (error) {
        res.status(401).send({error:"Access denied"});
    }
}

module.exports = fetchuser;