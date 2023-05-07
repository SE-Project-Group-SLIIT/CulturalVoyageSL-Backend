const router = require("express").Router();
const { Router } = require("express");
const replyController = require("../controllers/replyController");

router.route("/add").post((req,res) => {
    const response = replyController.addReplyController(
         req.body,
         res
        )
});
    
  //retrive all comments
router.route("/view").get((req, res) => {
    const response = replyController.viewReplyController(
      req.body.data,
      res
    );
});


module.exports = router;