const { response } = require("express");
const mongoose = require("mongoose");
const Reply = require("../models/Replies");

module.exports.addReplyService = async(req,res) =>{
    try{
      const message = req.message;
      const user =req.user;
      const post = req.post;
      const likes = 0;
      const messageStatus = req.messageStatus;

      const newReply = new Reply({
        message, 
        user, 
        post,
        likes, 
        messageStatus, 
      });
     console.log("awa")
      const response = await newReply.save();
        
        return{
            msg: "success",
            data: response,
        };
    } catch (err){
        throw err;
    }
}

//view all events 
module.exports.viewReplyService = async(req,res) =>{
    try{
        let id = req.id;
        let response = await Reply.find({'post': id});

        if(response){
            return{
                msg: "success",
                data: response,
            };
        }else{
            return{
                msg:"faild",
                data:response,
            }
        }
    }catch (err){
        throw err;
    }
}
