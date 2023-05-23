const { response } = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Posts");

module.exports.addPostService = async(req,res) =>{
    try{
      const title = req.title;
      const message = req.message;
      const user = req.user;
      const likes = 0;
      const messageStatus = req.messageStatus;
      const keyWords = req.keyWords;

      const newPost = new Post({
        title,
        message, 
        user, 
        likes, 
        messageStatus, 
        keyWords, 
      });
      
      const response = await newPost.save();

        return{
            msg: "success",
            data: response,
        };
    } catch (err){
        throw err;
    }
}

//view all events 
module.exports.viewPostService = async(req,res) =>{
    try{
        let response = await Post.find().populate("replies").exec();
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
