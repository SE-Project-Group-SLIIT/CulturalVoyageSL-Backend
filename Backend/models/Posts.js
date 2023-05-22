const mongoose =require("mongoose");

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

const Event = mongoose.model("Post",post);
module.exports=Event;