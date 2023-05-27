const { response } = require("express");
const mongoose = require("mongoose");
const Post = require("../models/Posts");
const User = require("../models/Users")

module.exports.addPostService = async (req, res) => {
    try {
        const title = req.title;
        const message = req.message;
        const userEmail = req.user;
        const likes = 0;
        const messageStatus = req.messageStatus;
        const keyWords = req.keyWords;

        let responses = await User.find({ 'Email': userEmail });
        let user = responses[0]._id;

        const newPost = new Post({
            title,
            message,
            user,
            likes,
            messageStatus,
            keyWords,
        });

        const response = await newPost.save();

        return {
            msg: "success",
            data: response,
        };
    } catch (err) {
        throw err;
    }
}

//view all events 
module.exports.viewPostService = async (req, res) => {
    try {
        let response = await Post.find().populate("replies").exec();
        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
}

//view all events 
module.exports.searchPostService = async (req, res) => {
    try {
        console.log("searched", req.searchQuery)
        const search_string = req.searchQuery
        const query = {
            $text: {
                $search: search_string,
                $language: "en",
                $caseSensitive: false,
                $diacriticSensitive: false,
                $fields: {
                    title: 1,
                    message: 1
                }
            }

        };

        const response = await Post.find(
            { $text: { $search: search_string } },
            { score: { $meta: 'textScore' } }
          ).sort({ score: { $meta: 'textScore' } });
        
          if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "faild",
                data: response,
            }
        }

    } catch (err) {
        throw err;
    }
}
