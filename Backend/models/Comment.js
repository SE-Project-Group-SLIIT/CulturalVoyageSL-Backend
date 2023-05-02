const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const comment = new Schema({

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

const Event = mongoose.model("Comment",comment);
module.exports=Event;