// chat name 
// group chat 
// users 
// Message
// admin 

const mongoose =require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const chatModel=mongoose.Schema ({
    chatName:{type:stringify,trim:true},
    isGroupChat:{type:Boolean,default:false},
    users :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    ],
    latestMessage :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message",
    },
    groupAdmin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
},
    {
        timestamps:true,
    }

);

const Chat=mongoose.model("Chat",chatModel);
module.exports=Chat;

