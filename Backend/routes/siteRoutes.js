const router = require("express").Router();
const {Router} = require("express");
const siteController = require("../controllers/siteController");

// route for add new site
router.route("/addSite").post((req,res)=>{
    console.log("req>>>",req);
    console.log(req.body);
    const response = siteController.addSiteController(req.body, res)
});

// route for view all sites
router.route("/allSites").get((req,res)=>{
    const response = siteController.viewAllSitesController(req.body.data, res);
});

// route for view all sites according to site category
router.route("/viewSites/:SiteCategory").get((req,res)=>{
    let SiteCategory = req.params.SiteCategory;
    let getData = {
        SiteCategory : SiteCategory,
        body: req.body,
    };
    console.log("getData",getData);

    const response = siteController.viewSiteCategoryController(getData, res);
});

// route for update site
router.route("/updateSite/:id").post((req,res)=>{
    console.log("updateRoute>>",req.body);
    let id = req.params.id;
    let updateSite ={
        id: id,
        body: req.body,
    }
    const response = siteController.updateSiteController(updateSite, res);
});

// route for delete site
router.route("/deleteSite/").delete((req,res) => {
    console.log("delete route",req.body);
    const response = siteController.deleteSiteController(req.body , res);
});

// route for get one site using id
router.route("/getSite/:id").get((req, res)=>{
    let id = req.params.id;
    let getData = {
        id: id,
        body: req.body,
    };

    const response = siteController.getOneSiteController(getData, res);
});

// route for search site by name
router.route("/searchSite/:SiteName").get((req,res)=>{
    let SiteName = req.params.SiteName;
    console.log(SiteName);
    console.log("search>>>", req);
    let getData = {
        SiteName:SiteName,
        body:req.body
    }
    const response = siteController.searchSiteNameController(getData, res);
});


module.exports = router;