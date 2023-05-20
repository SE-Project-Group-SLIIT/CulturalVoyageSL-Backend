const {response} = require("express");
const eventService = require("../services/eventService");

module.exports.addEventController = async (req,res) =>{
    try {
        let eventResponse = await eventService.addEventService(req);
        if (eventResponse.msg='success') {
            return res.status(200).send({ message: "Event added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add event" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.viewEventController =async (req,res) =>{
    try{
        let eventResponse = await eventService.viewAllEventsService(req);
        if(eventResponse.msg='success'){
            return res.status(200).send({ message: "Events retrieved successfuly",data:eventResponse.data });
        }else {
            return res.status(400).send({ message: "Failed to retriev events data" });
        }
    }catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

module.exports.updateEventController = async (req, res) => {
    try {
  
  
      let eventResponse = await eventService.updateEventService(req);
  
      if (eventResponse.msg === "success") {
        return res.status(200).send({
          message: "Event updated",
          data: eventResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to update event",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };

  module.exports.deleteEventController = async (req, res) => {
    try {
  
  
      let eventResponse = await eventService.deleteEventService(req);
  
      if (eventResponse.msg === "success") {
        return res.status(200).send({
          message: "Event Deleted Successfully",
          data: eventResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to delete event",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };

  module.exports.searchEventController = async (req, res) => {
    try {
  
  
      let eventResponse = await eventService.searchEventsService(req);
  
      if (eventResponse.msg === "success") {
        return res.status(200).send({
          message: "Events found",
          data: eventResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to find event",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };

  module.exports.searchEventByNameController = async (req, res) => {
    try {
  
  
      let eventResponse = await eventService.searchEventsByNameService(req);
  
      if (eventResponse.msg === "success") {
        return res.status(200).send({
          message: "Events found",
          data: eventResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to find event",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };

  module.exports.singleViewEventsController = async (req, res) => {
    try {
  
  
      let eventResponse = await eventService.singleViewEventService(req);
  
      if (eventResponse.msg === "success") {
        return res.status(200).send({
          message: "Events found",
          data: eventResponse.data,
        });
      } else {
        return res.status(400).send({
          message: "Failed to find event",
          data: null,
        });
      }
    } catch (err) {
      return res.status(500).send({
        message: "Internal server error",
        err: err.message,
      });
    }
  };