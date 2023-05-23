const {response} = require("express");
const postService = require("../services/postService");

module.exports.addPostController = async (req,res) =>{
    try {
        let eventResponse = await postService.addPostService(req);
        if (eventResponse.msg='success') {
            return res.status(200).send({ message: "Post added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add Post" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.viewPostController =async (req,res) =>{
    try{
        let eventResponse = await postService.viewPostService(req);
        if(eventResponse.msg='success'){
            return res.status(200).send({ message: "Post retrieved successfuly",data:eventResponse.data });
        }else {
            return res.status(400).send({ message: "Failed to retriev Post data" });
        }
    }catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.searchPostController =async (req,res) =>{
    try{
        let eventResponse = await postService.searchPostService(req);
        if(eventResponse.msg='success'){
            return res.status(200).send({ message: "Post retrieved successfuly",data:eventResponse.data });
        }else {
            return res.status(400).send({ message: "Failed to retriev Post data" });
        }
    }catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

