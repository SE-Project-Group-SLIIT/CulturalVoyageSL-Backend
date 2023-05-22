const {response} = require("express");
const replyService = require("../services/replyService");

module.exports.addReplyController = async (req,res) =>{
    try {
        let eventResponse = await replyService.addReplyService(req);
        if (eventResponse.msg='success') {
            return res.status(200).send({ message: "Reply added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add Reply" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.viewReplyController =async (req,res) =>{
    try{
        let eventResponse = await replyService.viewReplyService(req);
        if(eventResponse.msg='success'){
            return res.status(200).send({ message: "Reply retrieved successfuly",data:eventResponse.data });
        }else {
            return res.status(400).send({ message: "Failed to retriev Reply data" });
        }
    }catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}
