const { response } = require("express");
const mongoose = require("mongoose");
const Comment = require("../models/Comment");

module.exports.addCommentService = async(req,res) =>{
    try{

      const message = req.message;
      const user =req.user;
      const likes = req.likes;
      const messageStatus = req.messageStatus;
      const keyWords = req.keyWords;

      const newComment = new Comment({
        message, 
        user, 
        likes, 
        messageStatus, 
        keyWords, 
      });
     
      const event = await newComment.save();
        
        return{
            msg: "success",
            data: response,
        };
    } catch (err){
        throw err;
    }
}

//view all events 
module.exports.viewCommentService = async(req,res) =>{
    try{
        let response = await Comment.find();

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
