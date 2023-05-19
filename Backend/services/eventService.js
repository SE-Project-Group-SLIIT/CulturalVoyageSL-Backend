const { response } = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Events");

module.exports.addEventService = async(req,res) =>{
    console.log("req",req);
  try{

        const eventName = req.eventName;
        const eventDescription =req.eventDescription;
        const eventType = req.eventType;
        const dateFrom = req.dateFrom;
        const dateTo = req.dateTo;
        const Time = req.Time;
        const Location = req.Location;
        const Performer = req.Performer;
        const contactPerson = req.contactPerson;
        const Contact = req.Contact;
        const imageOne = req.imageOne;
        const imageTwo = req.imageTwo;
        const imageThree = req.imageThree;
        const Agenda = req.Agenda;

        const newEvent = new Event({
            eventName, 
            eventDescription, 
            eventType,
            dateFrom,
            dateTo, 
            Time, 
            Location, 
            Performer, 
            contactPerson, 
            Contact,
            imageOne,
            imageTwo,
            imageThree,
            Agenda
        });
       
        const response = await newEvent.save();
        
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
            eventType :req.eventType,
            dateFrom:req.dateFrom,
            dateTo:req.dateTo, 
            Time : req.Time,
            Location : req.Location,
            Performer : req.Performer,
            contactPerson : req.contactPerson,
            Contact : req.Contact,
            imageOne:req.imageOne,
            imageTwo:req.imageTwo,
            imageThree:req.imageThree,
            Agenda:req.Agenda
           
        
        
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


  //search events 
module.exports.searchEventsService = async(req,res) =>{
  console.log("request", req)

  try{
    const Value = req.eventType;
      let response = await Event.find({ eventType: Value
        // { $regex: ".*" + Value + ".*", $options: 'i' }
       });

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

  //search events 
  module.exports.searchEventsByNameService = async(req,res) =>{
    console.log("request", req)
  
    try{
      const Value = req.eventName;
        let response = await Event.find({ eventName: { $regex: ".*" + Value + ".*", $options: 'i' }
         });
  
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

    //search events 
    module.exports.singleViewEventService = async(req,res) =>{
      // console.log("request", req)
    
      try{
        const id = req.id;
          let response = await Event.findOne({ _id: id  });
    
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
        // console.log("errr>>",err)
          throw err;
      }
    }
  