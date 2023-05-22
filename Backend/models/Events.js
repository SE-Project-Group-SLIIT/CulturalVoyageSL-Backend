const mongoose =require("mongoose");

const Schema = mongoose.Schema;

const event = new Schema({

    eventName : {
        type : String,
        maxlength : 100,
        required : true,
    },

    eventDescription : {
        type : String,
        maxlength : 2500,
        required : true,
    },

    eventType : {
        type : String,
        maxlength : 300,
        required : true,
    },

    dateFrom : {
        type : String,
        required : true,
    },

    dateTo :{
        type : String,
        required : true,
    },

    Time : {
        type : String,
        required : true,
    },

    Location : {
        type : String,
        maxlength : 100,
        required :true,
    },

    Performer : {
        type : String,
        maxlength : 100,
    },

    contactPerson : {
        type : String,
        maxlength : 100,
    },

    Contact : {
        type : Number,
        maxlength : 11,
    },

    imageOne : {
        type : String,
    },

    imageTwo : {
        type : String,
    },

    imageThree : {
        type : String,
    },

    Agenda :{
        type : String,
    }

    // image,video,agenda as image need to add

})

const Event = mongoose.model("Event",event);
module.exports=Event;