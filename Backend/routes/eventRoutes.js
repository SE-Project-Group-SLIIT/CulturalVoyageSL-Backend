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

        

module.exports = router;