const router = require("express").Router();
const userController = require("../controllers/userController");
const User = require("../models/Users");

// route for add user
router.route("/addUser").post((req,res) => {
    console.log("user route", req.body);
    const response = userController.createUserController(req.body, res);
});

// route for get one user details using email and password
router.route("/getUser/:Email").get((req,res)=>{
    // let id = req.params.id;
    let Email = req.params.Email;
    // let Password = req.params.Password;

    let getData = {
        Email: Email,
        // Password: Password,
        body: req.body,
    };

    const response = userController.getOneUserController(getData, res);
});

// route for get one user details using id
router.route("/getUser/:id").post((req,res)=>{
    let id = req.params.id;
    // let Email = req.params.Email;
    // let Password = req.params.Password;

    let getData = {
       id: id,
        body: req.body,
    };

    const response = userController.getSingleUserController(getData, res);
});

// route for get all users
router.route("/getAllUsers").get((req,res) => {
    console.log("getAll...");
    const response = userController.getUserController(req.body.data ,res);
});

// route for update selected user using id
router.route("/updateUser/:id").post((req,res) => {
    console.log("request to update", req)
    let id = req.params.id;
    let updateUser = {
        id: id,
        body: req.body,
    };

    const response = userController.updateUserController(updateUser, res);
});

// route for delete user using id
router.route("/deleteUser").delete((req,res)=>{
    console.log("delete user", req);
    let id = req.body._id;
    let deleteUser = {
        id:id,
        body: req.body,
    };

    const response = userController.deleteUserContraller(deleteUser,res);
})

module.exports = router;