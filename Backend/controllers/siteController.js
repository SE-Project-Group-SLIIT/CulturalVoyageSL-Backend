const {response} = require("express");
const siteService = require("../services/siteService");

// controller for add new site
module.exports.addSiteController = async(req,res) => {
    try {

        let siteResponse = await siteService.addSiteService(req);
        
        if(siteResponse.msg = 'success'){
            return res.status(200).send({ message: "Site added successfuly" });
        } else {
            return res.status(400).send({ message: "Failed to add site" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

// controller for view all sites
module.exports.viewAllSitesController = async(req,res) => {
    try {

        let siteResponse = await siteService.viewAllSiteService(req);
        
        if((siteResponse.msg = 'success')){
            return res.status(200).send({ 
                message: "Sites retrieved successfuly",
                data: siteResponse.data,
            });
        } else {
            return res.status(400).send({ message: "Failed to retrieve sites" });
        }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message });
    }
}

// controller for get all sites according to site category
module.exports.viewSiteCategoryController = async(req,res) => {
  try {
    let siteResponse = await siteService.viewSiteCategoryService(req);

    if((siteResponse.msg = 'success')){
      return res.status(200).send({ 
          message: "Sites retrieved successfuly",
          data: siteResponse.data,
      });
  } else {
      return res.status(400).send({ message: "Failed to retrieve sites" });
  }
  
  } catch (err) {
    return res.status(500).send({ message: "Internal server error", err: err.message });
  }
}

// contraller for update sites
module.exports.updateSiteController = async(req,res) => {
    try {
      console.log("controller",req);
        let siteResponse = await siteService.updateSiteService(req);
        console.log("siteResponse>>",siteResponse);
        if (siteResponse.msg === "success") {
            return res.status(200).send({
              message: "Site updated",
              data: siteResponse.data,
            });
          } else {
            return res.status(400).send({
              message: "Failed to update site",
              data: null,
            });
          }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message});
    }
};

// controller for delete site
module.exports.deleteSiteController = async(req, res) =>{
    try {
        let siteResponse = await siteService.deleteSiteService(req);

        if (siteResponse.msg === "success") {
            return res.status(200).send({
              message: "Site deleted successfully",
              data: siteResponse.data,
            });
          } else {
            return res.status(400).send({
              message: "Failed to delete site",
              data: null,
            });
          }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message});
    }
}

// controller for get one site using id
module.exports.getOneSiteController = async(req,res)=>{
    try {
        let siteResponse = await siteService.getOneSiteService(req);

        if (siteResponse.msg === "success") {
            return res.status(200).send({
              message: "Site retrieved successfully",
              data: siteResponse.data,
            });
          } else {
            return res.status(400).send({
              message: "Failed to retrieve site",
              data: null,
            });
          }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message});
    }
}

// controller for search sites by name
module.exports.searchSiteNameController = async(req,res)=>{
    try {
        let siteResponse = await siteService.searchSiteNameService(req);

        if (siteResponse.msg === "success") {
            return res.status(200).send({
              message: "Site found successfully",
              data: siteResponse.data,
            });
          } else {
            return res.status(400).send({
              message: "Failed to find site",
              data: null,
            });
          }
    } catch (err) {
        return res.status(500).send({ message: "Internal server error", err: err.message});
    }
}