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
router.route("/view/:id").get((req, res) => {
  let id = req.params.id;
  let searchData = {
    id: id,
    body: req.body,
  };
    const response = replyController.viewReplyController(
      searchData,
      res
    );
});


module.exports = router;