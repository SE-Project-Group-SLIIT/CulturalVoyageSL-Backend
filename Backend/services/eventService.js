const { response } = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");

module.exports.addEventService = async(req,res) =>{
    try{

        const eventName = req.eventName;
        const eventDescription =req.eventDescription;
        const Date = req.Date;
        const Time = req.Time;
        const Location = req.Location;
        const Performer = req.Performer;
        const contactPerson = req.contactPerson;
        const Contact = req.Contact;

        const newEvent = new Event({
            eventName, 
            eventDescription, 
            Date, 
            Time, 
            Location, 
            Performer, 
            contactPerson, 
            Contact 
        });
       
        const event = await newEvent.save();
        
        return{
            msg: "success",
            data: response,
        };
    } catch (err){
        throw err;
    }
}

//view all events 
module.exports.viewAllEventsService = async(req,res) =>{
    try{
        let response = await Event.find();

        if(response){
            return{
                msg: "success",
                data: response,
            };
        }else{
            return{
                msg:"faild",
                data:response,
            }
        }
    }catch (err){
        throw err;
    }
}