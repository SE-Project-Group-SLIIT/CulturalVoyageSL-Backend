const { response } = require("express");
const mongoose = require("mongoose");
const Site = require("../models/Sites");
const cloudinary = require("../utils/cloudinary");

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
        const SiteImage1 = req.SiteImage1;
        const SiteImage2 = req.SiteImage2;
        const SiteImage3 = req.SiteImage3;
        const SiteImage4 = req.SiteImage4;

        const result1 = await cloudinary.uploader.upload(SiteImage1, {
            floder: "site",
            // width: 300,
            // crop: "scale"
        });

        const result2 = await cloudinary.uploader.upload(SiteImage2, {
            folder: "site",
            // width: 300,
            // crop: "scale"
        });

        const result3 = await cloudinary.uploader.upload(SiteImage3, {
            folder: "site",
            // width: 300,
            // crop: "scale"
        });

        const result4 = await cloudinary.uploader.upload(SiteImage4, {
            folder: "site",
            // width: 300,
            // crop: "scale"
        });

        const newSite = new Site({
            SiteName,
            SiteCategory,
            Description,
            Value,
            VisitingHours,
            TicketingDetails,
            DressCode,
            Behaviour,
            SiteImage1: {
                public_id: result1.public_id,
                url : result1.secure_url
            },
            SiteImage2: {
                public_id : result2.public_id,
                url: result2.secure_url
            },
            SiteImage3: {
                public_id: result3.public_id,
                url: result3.secure_url
            },
            SiteImage4: {
                public_id: result4.public_id,
                url: result4.secure_url
            }
        });

        const site = await newSite.save();
        console.log("new site>>>");

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
        console.log("req: ", req);
        let idString = id.toString();

        const currentSite = await Site.findById(idString);

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
        const data = {
            SiteName: req.body.SiteName,
            SiteCategory: req.body.SiteCategory,
            Description: req.body.Description,
            Value: req.body.Value,
            VisitingHours: req.body.VisitingHours,
            TicketingDetails: req.body.TicketingDetails,
            DressCode: req.body.DressCode,
            Behaviour: req.body.Behaviour,
            // SiteImage1: req.body.SiteImage1,
            // SiteImage2: req.body.SiteImage2,
            // SiteImage3: req.body.SiteImage3,
            // SiteImage4: req.body.SiteImage4
        } 

        // modify image conditionally
        // if(req.body.SiteImage1 !==''){
        //     console.log("!==");
        //     const ImgId = currentSite.SiteImage1.public_id;
        //     console.log("ImgId",ImgId);
        //     if(ImgId){
        //         console.log("if",ImgId);
        //         await cloudinary.uploader.destroy(ImgId);
        //         console.log("destroy",ImgId);
        //     }

        //     const newSiteImage1 = await cloudinary.uploader.upload(req.body.SiteImage1,{
        //         floder: "site"
        //     });

        //     console.log("newSiteImage1",newSiteImage1);

        //     data.SiteImage1 = {
        //         public_id: newSiteImage1.public_id,
        //         url : newSiteImage1.secure_url
        //     }
        // }

        // if(req.body.SiteImage2 !==''){
        //     console.log("2 !==");
        //     const ImgId = currentSite.SiteImage2.public_id;
        //     if(ImgId){
        //         await cloudinary.uploader.destroy(ImgId);
        //     }

        //     const newSiteImage2 = await cloudinary.uploader.upload(req.body.SiteImage2,{
        //         floder: "site"
        //     });

        //     data.SiteImage2 = {
        //         public_id: newSiteImage2.public_id,
        //         url : newSiteImage2.secure_url
        //     }
        // }

        // if(req.body.SiteImage3 !==''){
        //     console.log("3 !==");
        //     const ImgId = currentSite.SiteImage3.public_id;
        //     if(ImgId){
        //         await cloudinary.uploader.destroy(ImgId);
        //     }

        //     const newSiteImage3 = await cloudinary.uploader.upload(req.body.SiteImage3,{
        //         floder: "site"
        //     });

        //     data.SiteImage3 = {
        //         public_id: newSiteImage3.public_id,
        //         url : newSiteImage3.secure_url
        //     }
        // }

        // if(req.body.SiteImage4 !==''){
        //     console.log("!==");
        //     const ImgId = currentSite.SiteImage4.public_id;
        //     if(ImgId){
        //         await cloudinary.uploader.destroy(ImgId);
        //     }

        //     const newSiteImage4 = await cloudinary.uploader.upload(req.body.SiteImage4,{
        //         floder: "site"
        //     });

        //     data.SiteImage4 = {
        //         public_id: newSiteImage4.public_id,
        //         url : newSiteImage4.secure_url
        //     }
        // }

        // const updateSite = {
        //     SiteName,
        //     SiteCategory,
        //     Description,
        //     Value,
        //     VisitingHours,
        //     TicketingDetails,
        //     DressCode,
        //     Behaviour,
        //     SiteImage1
        // };
        console.log("updateService",data);
        let response = await Site.findOneAndUpdate({_id: idString}, data, {new:true});

        console.log("res", response);

        if (response) {
            console.log("service res", response);
            return {
                msg: "success",
                data: response,
            };
        } else {
            console.log("service res fail", response);
            return {
                msg: "fail",
                data: response,
            };
        }
    } catch (err) {
        console.log("service res err", err);
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
    console.log(req.SiteName);

    try {
        const SiteName = req.SiteName;
        
        let response = await Site.find({SiteName: {$regex: ".*" + SiteName + ".*", $options: 'i'}});

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