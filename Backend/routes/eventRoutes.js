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
router.route("/updateEvent").put((req, res) => {
    console.log("req>>>>", req.body)
  
    const response = eventController.updateEventController(req.body, res);
  
  });

    //route for delete Events
router.route("/deleteEvent").delete((req, res) => {
    console.log("req>>>>", req.body)
    const response = eventController.deleteEventController(req.body, res);
  
  });
  
    //route for search Events by type

router.route("/searchEvents/").get((req, res) => {
  console.log("req>>>>>",req.body);
  const response = eventController.searchEventController(
    req.body,
    res)
  });






module.exports = router;