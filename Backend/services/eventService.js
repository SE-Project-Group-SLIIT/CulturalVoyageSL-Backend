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

module.exports.updateEventService = async (req, res) => {
    console.log(">>>>>>>>", req)
    try {
        const id = req._id;
        console.log("id",id);
      let response = await Event.findOneAndUpdate(
        
        { _id: id },
        { $set: {
            
            eventName : req.eventName,
            eventDescription : req.eventDescription,
            Date : req.Date,
            Time : req.Time,
            Location : req.Location,
            Performer : req.Performer,
            contactPerson : req.contactPerson,
            Contact : req.Contact,
        
        } },
  
      );
      console.log("res>>", response)
  
      if (response) {
        return {
          msg: "success",
          data: response,
        };
      } else {
        return {
          msg: "fail",
          data: null,
        };
      }
    } catch (err) {
      throw err;
    }
  };

module.exports.deleteEventService = async (req, res) => {
    try {
      console.log("request", req)
      const id = req._id;
      let response = await Event.findOneAndDelete(
        { _id: id},
  
      );
  
      if (response) {
        return {
          msg: "success",
          data: response,
        };
      } else {
        return {
          msg: "fail",
          data: null,
        };
      }
    } catch (err) {
      throw err;
    }
  };