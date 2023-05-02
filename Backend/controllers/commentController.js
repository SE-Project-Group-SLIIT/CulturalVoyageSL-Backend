const {response} = require("express");
const commentService = require("../services/commentService");

module.exports.addCommentController = async (req,res) =>{
    try {
        let eventResponse = await commentService.addCommentService(req);
        if (eventResponse.msg='success') {
            return res.status(200).send({ message: "Comment added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add Comment" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.viewCommentController =async (req,res) =>{
    try{
        let eventResponse = await commentService.viewCommentService(req);
        if(eventResponse.msg='success'){
            return res.status(200).send({ message: "Comment retrieved successfuly",data:eventResponse.data });
        }else {
            return res.status(400).send({ message: "Failed to retriev comment data" });
        }
    }catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
