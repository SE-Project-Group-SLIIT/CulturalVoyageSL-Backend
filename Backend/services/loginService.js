const {response} = require('express');
const mongoose = require('mongoose');
let User = require('../models/Users');

// create service for login
module.exports.loginService = async(req,res)=>{
    try {
        let Email = req.Email;
        let Password = req.Password;
        console.log(Password,Email)
        let response = await User.find({Email: Email,Password:Password});
        console.log(response)

        if (response) {
            return{
                msg:"success",
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