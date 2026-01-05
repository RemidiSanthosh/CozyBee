const express =require("express");
const route = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");


// its joi validation from joi schema.js for newlisting
const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};


//index route
route.get("/",wrapAsync( async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//new route
route.get("/new",(req,res)=>{
    res.render("listings/newListing.ejs");
})


//show route
route.get("/:id",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));

//edit route
route.get("/:id/edit",wrapAsync(async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}));

//newlistings //create route
route.post("/",validateListing,wrapAsync( async(req,res)=>{
   // let {title,description,image,price,location,country}=req.body;
   let listing = req.body.listing;
   const newListing =  new Listing(listing);
   await newListing.save();
   req.flash("success", "New Listing is Created");
   res.redirect("/listings");

}));

//edit and update
route.put("/:id",validateListing,wrapAsync(async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstructing
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}));

//delete route
route.delete("/:id",wrapAsync(async (req,res)=>{
    let {id}=req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect ("/listings");
}));  

module.exports = route;