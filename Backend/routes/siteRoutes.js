const router = require("express").Router();
const {Router} = require("express");
const siteController = require("../controllers/siteController");

// route for add new site
router.route("/addSite").post((req,res)=>{
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

    const response = siteController.viewSiteCategoryController(getData, res);
});

// route for update site
router.route("/updateSite/:id").post((req,res)=>{
    let id = req.params.id;
    let updateSite ={
        id: id,
        body: req.body,
    }
    const response = siteController.updateSiteController(updateSite, res);
});

// route for delete site
router.route("deleteSite").delete((req,res) => {
    
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
router.route("/searchSite/").get((req,res)=>{
    console.log("search>>>", req.body);
    const response = siteController.searchSiteNameController(req.body, res);
});


module.exports = router;