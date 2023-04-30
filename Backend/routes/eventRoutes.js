const router = require("express").Router();
const { Router } = require("express");
const eventController = require("../controllers/eventController");

router.route("/addEvent").post((req,res) => {
    const response = eventController.addEventController(
         req.body,
         res
        )
});
       
        

module.exports = router;