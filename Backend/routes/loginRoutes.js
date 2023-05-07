const router = require("express").Router();
const loginController = require("../controllers/loginController");
const User = require("../models/Users");

// router for login
router.route("/login/:Email/:Password").get((req,res)=>{
    let Email = req.params.Email;
    let Password = req.params.Password;

    let getData = {
        Email: Email,
        Password: Password,
        body: req.body,
    };

    const response = loginController.loginController(getData,res);
});

module.exports = router;