const express =require("express");
const route = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload= multer({storage});

const listingController = require("../controllers/listings.js");

//index route
route.get("/",wrapAsync(listingController.index));

//new route render new Form
route.get("/new",isLoggedIn,listingController.renderNewForm);

//showListing route
route.get("/:id",wrapAsync(listingController.showListing));

//newlistings //create route
route.post("/",isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));

//edit route
route.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));

// update
route.put("/:id",isLoggedIn,isOwner,validateListing,upload.single('listing[image]'),wrapAsync(listingController.updateListing));

//delete route
route.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.deleteListing)); 

//search not found page
route.get("/search", listingController.searchListings);


module.exports = route;