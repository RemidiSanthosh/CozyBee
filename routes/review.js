const express =require("express");
const route = express.Router({mergeParams : true}); 
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Reviews
//post route ,validation, error handling
route.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));


//delete route ,delete review route
route.delete("/:reviewId" ,isLoggedIn, isReviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports = route;


