const {response} = require("express");
const loginService = require("../services/loginService")
// contraller for login
module.exports.loginController = async(req,res) => {
    try {
        let serviceResponse = await loginService.loginService(req);
        if ((serviceResponse.msg = "success")) {
            // return serviceResponse
            return res.status(200).send({
                message: "Login details retrieved...!",
                data: serviceResponse.data,
            });
        } else {
            return res.status(300).send({message: "Cannot retrieve login details...!"})
        }
    } catch (err) {
        return res.status(300).send({message: "Cannot retrive login details...!", err: err.message});
    }
};
