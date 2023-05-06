const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const site = new Schema({
    SiteName : {
        type: String,
        maxlength: 150,
        required: true
    },

    SiteCategory : {
        type: String,
        maxlength: 30,
        required: true
    },

    // SiteImage : {
    //     required: true
    // },

    Description : {
        type: String,
        required: true
    },

    Value : {
        type: String,
        // required: true
    },

    VisitingHours : {
        type: String,
        required: true
    },

    TicketingDetails : {
        type: String,
        required: true
    },

    DressCode : {
        type: String,
        required: true
    },

    Behaviour : {
        type: String,
        required: true
    }
})

const Site = mongoose.model("Site", site);
module.exports = Site;