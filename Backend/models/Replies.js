const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const reply = new Schema({
    message: {
        type : String,
        required : true, 
    },

    user: {
        type: Schema.Types.ObjectId,
    },

    post: {
        type: Schema.Types.ObjectId,
    },

    likes : {
        type: Number
    },

    messageStatus: {
        type :Boolean,
        default : true,
    },


})

const Event = mongoose.model("Reply",reply);
module.exports=Event;