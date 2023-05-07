const {response} = require('express');
const mongoose = require('mongoose');
let User = require('../models/Users');

// create user service for add user 
module.exports.createUserService = async(req,res) => {
    try{
        console.log(req)
        const Name = req.Name;
        const Email = req.Email;
        const MobileNumber = req.MobileNumber;
        const Password = req.Password;
        const Location = req.Location;
        const Bio = req.Bio;

        const newUser = new User({
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio
        });

        let response = await newUser.save();

        if(response){
            return{
                msg: 'success',
                data: response,
            };
        } else {
            return{
                msg: 'failed',
                data: response,
            };
        }
    }catch(err){
        throw err;
    }
};

// create service for get one User using email
module.exports.getOneUserService = async(req,res) => {
    try {
        // let id = req.id;
        console.log("req>>>",req.email);
        let Email = req.email;
        // let Password = req.Password;
        let response = await User.find({email : Email});

        if(response){
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
    
};

// get one User using id
module.exports.getSingleUserService = async(req,res) => {
    try {
        let id = req.id;
        // let Email = req.Email;
        // let Password = req.Password;
        let response = await User.find({_id: id });

        if(response){
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
    
};

// create service for get all Users
module.exports.getUserService = async(req,res) => {
    try {
        let response = await User.find();

        if (response) {
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
};

// create service for update selected User
module.exports.updateUserService = async(req,res) => {
    try {
        let id = req.id;
        console.log("req>>>",req.id);
        let idString = id.toString();

        // destructure
        const {
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio
        } = req.body;

        const updateUser = {
            Name,
            Email,
            MobileNumber,
            Password,
            Location,
            Bio
        };

        let response = await User.findByIdAndUpdate(
            {_id: idString},
            updateUser
        );

        if (response) {
            return{
                msg: "success",
                data: response,
            };
        } else {
            return{
                msg: "faild",
                data: response,
            };
        }

    } catch (err) {
        throw err;
    }
};

// create service for delete User
module.exports.deleteUserService = async(req,res)=>{
    try {
        let id = req.id;
        console.log("req>>>",req.id);
        let idString = id.toString();

        let response = await User.findByIdAndDelete({_id: idString});

        if (response) {
            return{
                msg:"success",
                data:response,
            };
        } else {
            return{
                msg: "faild",
                data:response,
            };
        }
    } catch (err) {
        throw err;
    }
};