const {response} = require("express");
const userService = require("../services/userService");
const {userValidationSchema} = require("../validation/userValidation");

// controller for add User
module.exports.createUserController = async(req,res) =>{
    console.log("user controller");
    try {
        console.log("user controller try");
        const {error} = userValidationSchema(req);
        if(error){
            console.log("Vaalidation Failed");
            return res.status(300).send({message: "Vaalidation Failed...!", err: error});
        }

        let serviceResponse = await userService.createUserService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            console.log("New User Added");
            return res.status(200).send({message: "New User Added...!"});
        } else{
            console.log("Cannot Add New User");
            return res.status(300).send({message: "Cannot Add New User.!"});
        }
    } catch (err) {
        console.log("user contraller catch",err);
        return res.status(300).send({message: "Cannot Add new User.....!", err: err.message});
    }
};

// controller for get one User using email and password
module.exports.getOneUserController = async(req,res) => {
    try {
        let serviceResponse = await userService.getOneUserService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({
                message: "User details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve User...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive User...!", err: err.message}); 
    }
};

// controller for get one User using id
module.exports.getSingleUserController = async(req,res) => {
    try {
        let serviceResponse = await userService.getSingleUserService(req);
        if((serviceResponse.msg = "success")){
            // return serviceResponse
            return res.status(200).send({
                message: "User details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve User...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive User...!", err: err.message}); 
    }
};

// controller for get all Users
module.exports.getUserController = async(req,res) => {
    try {
        let serviceResponse = await userService.getUserService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "All Users details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrive Users...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot get Users...!", err: err.message});
    }
};

// controller for update User
module.exports.updateUserController = async(req,res) => {
    try {
        let serviceResponse = await userService.updateUserService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Users details updated...!",
            });
        } else {
            return res.status(300).send({message: "Cannot update User...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot update User...!", err: err.message});
    }
};

// contraller for delete User
module.exports.deleteUserContraller = async(req,res) =>{
    try {
        let serviceResponse = await userService.deleteUserService(req);
        if ((serviceResponse.msg = "success")) {
            // return service respose
            return res.status(200).send({
                message: "Users details deleted...!",
            });
        } else {
            return res.status(300).send({message: "Cannot delete User...!"});
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot delete User...!", err: err.message});
    }
};