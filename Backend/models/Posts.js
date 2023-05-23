const mongoose =require("mongoose");
const { type } = require("os");

const Schema = mongoose.Schema;

const post = new Schema({

    title: {
        type : String,
        required : true, 
    },

    message: {
        type : String,
        required : true, 
    },

    user: {
        type: Schema.Types.ObjectId,
    },

    replies: {
        type: Number,
        default : 0,
    }
        
    ,

    likes : {
        type: Number
    },

    messageStatus: {
        type :Boolean,
        default : true,
    },

    keyWords : {
        type: String
    }

})
post.index({ title: "text", message: "text" });


const Event = mongoose.model("Post",post);
module.exports=Event;