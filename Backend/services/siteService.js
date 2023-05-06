const { response } = require("express");
const mongoose = require("mongoose");
const Site = require("../models/Sites");

// service for add new site
module.exports.addSiteService = async (req, res) => {
    try {
        const SiteName = req.SiteName;
        const SiteCategory = req.SiteCategory;
        const Description = req.Description;
        const Value = req.Value;
        const VisitingHours = req.VisitingHours;
        const TicketingDetails = req.TicketingDetails;
        const DressCode = req.DressCode;
        const Behaviour = req.Behaviour;

        const newSite = new Site({
            SiteName,
            SiteCategory,
            Description,
            Value,
            VisitingHours,
            TicketingDetails,
            DressCode,
            Behaviour
        });

        const site = await newSite.save();

        return {
            msg: "success",
            data: response,
        };

    } catch (err) {
        throw err;
    }
}

// service for view all sites
module.exports.viewAllSiteService = async (req, res) => {
    try {
        let response = await Site.find();

        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "failed",
                data: response,
            }
        }
    } catch (err) {
        throw err;
    }
}

// servise for get all sites according to siteCategory
module.exports.viewSiteCategoryService = async (req,res) =>{
    try {
        let SiteCategory = req.SiteCategory;
        let response = await Site.find({SiteCategory: SiteCategory});

        if (response) {
            return {
              msg: "success",
              data: response,
            };
          } else {
            return {
              msg: "fail",
              data: null,
            };
          }
          
    } catch (err) {
        throw err;
    }
}

// service for update site details
module.exports.updateSiteService = async(req, res) => {
    try {
        let id = req.id;
        console.log("id: ", req.id);
        let idString = id.toString();

        // let response = await Site.findOneAndUpdate(
        //     { _id: id },
        //     {
        //         $set: {
        //             SiteName: req.SiteName,
        //             SiteCategory: req.SiteCategory,
        //             Description: req.Description,
        //             Value: req.Value,
        //             VisitingHours: req.VisitingHours,
        //             TicketingDetails: req.TicketingDetails,
        //             DressCode: req.DressCode,
        //             Behaviour: req.Behaviour,
        //         }
        //     },
        // );
        const {
            SiteName,
            SiteCategory,
            Description,
            Value,
            VisitingHours,
            TicketingDetails,
            DressCode,
            Behaviour
        } = req.body;

        const updateSite = {
            SiteName,
            SiteCategory,
            Description,
            Value,
            VisitingHours,
            TicketingDetails,
            DressCode,
            Behaviour
        };
        let response = await Site.findByIdAndUpdate({_id: idString}, updateSite);

        console.log("res", response);

        if (response) {
            return {
                msg: "success",
                data: response,
            };
        } else {
            return {
                msg: "fail",
                data: response,
            };
        }
    } catch (err) {
        throw err;
    }
};

// service for delete site
module.exports.deleteSiteService = async(req, res) =>{
    try {
        console.log("delete request", req);

        const id = req._id;
        let response = await Site.findOneAndDelete(
            {_id: id},
        );

        if (response) {
            return {
              msg: "success",
              data: response,
            };
          } else {
            return {
              msg: "fail",
              data: null,
            };
          }
        
    } catch (err) {
        throw err;
    }
};

// service for get one site using id
module.exports.getOneSiteService = async(req, res)=>{
    try {
        let id = req.id;
        let response = await Site.find({_id: id});

        if (response) {
            return {
              msg: "success",
              data: response,
            };
          } else {
            return {
              msg: "fail",
              data: null,
            };
          }
    } catch (err) {
        throw err;
    }
}

// service for search sites by site name
module.exports.searchSiteNameService = async(req,res)=>{
    console.log("request", req);

    try {
        const Value = req.SiteName;
        
        let response = await Site.find({SiteName: {$regex: ".*" + Value + ".*", $options: 'i'}});

        if(response){
            return{
                msg: "success",
                data: response,
            };
        }else{
            return{
                msg:"faild",
                data:response,
            }
        }
    } catch (err) {
        throw err;
    }
}