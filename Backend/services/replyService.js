const { response } = require("express");
const mongoose = require("mongoose");
const Reply = require("../models/Replies");

module.exports.addReplyService = async(req,res) =>{
    try{
      const message = req.message;
      const user =req.user;
      const likes = Number(req.likes);
      const messageStatus = req.messageStatus;

      const newReply = new Reply({
        message, 
        user, 
        likes, 
        messageStatus, 
      });
     
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
        let response = await Reply.find();

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
