const router = require("express").Router();
const { Router } = require("express");
const eventController = require("../controllers/eventController");

router.route("/addEvent").post((req,res) => {
    const response = eventController.addEventController(
         req.body,
         res
        )
});
    
  //route for view Events
  router.route("/view").get((req, res) => {
    const response = eventController.viewEventController(
      req.body.data,
      res
    );
  });

  
    //route for update Events
router.route("/updateEvent").post((req, res) => {
    console.log("req>>>>", req.body)
  
    const response = eventController.updateEventController(req.body, res);
  
  });

    //route for delete Events
router.route("/deleteEvent").post((req, res) => {
    console.log("req>>>>", req.body)
    const response = eventController.deleteEventController(req.body, res);
  
  });
  
    //route for filter Events by type

router.route("/filterEvents/").post((req, res) => {
  console.log("req>>>>>",req.body);
  const response = eventController.searchEventController(
    req.body,
    res)
  });

     //route for search Events by name

router.route("/searchEvents/").post((req, res) => {
  console.log("req>>>>>",req.body);
  const response = eventController.searchEventByNameController(
    req.body,
    res)
  });

  //route for single view of Events 

router.route("/eventSingle").post((req, res) => {
  console.log("req>>>>>",req.body);
  const response = eventController.singleViewEventsController(
    req.body,
    res)
  });





module.exports = router;