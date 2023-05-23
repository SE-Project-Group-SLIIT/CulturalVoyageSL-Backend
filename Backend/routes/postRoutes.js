const router = require("express").Router();
const { Router } = require("express");
const postController = require("../controllers/postController");

router.route("/add").post((req,res) => {
    const response = postController.addPostController(
         req.body,
         res
        )
});
    
  //retrive all comments
router.route("/view").get((req, res) => {
    const response = postController.viewPostController(
      req.body.data,
      res
    );
});

  //retrive all comments
  router.route("/search").post((req, res) => {
    console.log("req",req.body)
    const response = postController.searchPostController(
      req.body,
      res
    );
});



module.exports = router;