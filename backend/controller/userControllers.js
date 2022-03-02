const generateToken = require("../config/gnerateToken");
const User = require("../models/userModel");
const asyncHandler=require("express-async-handler");

const registerUser = asyncHandler( async (req,res) =>{
 const {name,email,password,pic}=req.body;

 if(!name || !email || !password)
 {
     res.status(400);

     throw new Error("Please Enter all the field");
 }

  const userExists=await User.findOne({email});

  if(userExists)
  {
      res.status(400)
      throw new Error('User already Exists');
  }

  const user =await User.create({
      name,email,password,pic,
  })
  if(user)
  {
      res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
      })

  }
  else
  {
      res.status(400)
      throw new Error("Failed to create user")
  }
})


const authUser = asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    const user= await User.findOne({email});

    if(user && (await user.matchPassword(password)))
    {
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            token:generateToken(user._id)
      })

    }
    else{
    res.status(400)
      throw new Error("Failed to create user")
    }
})

module.exports={registerUser,authUser};