const jwt=require("jsonwebtoken")

const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECRET,{
        expiresIn:"10000s",
    })
}

module.exports=generateToken