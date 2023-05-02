const router = require("express").Router();
const { Router } = require("express");
const commentController = require("../controllers/commentController");

router.route("/add").post((req,res) => {
    const response = commentController.addCommentController(
         req.body,
         res
        )
});
    
  //retrive all comments
router.route("/view").get((req, res) => {
    const response = commentController.viewCommentController(
      req.body.data,
      res
    );
});


module.exports = router;