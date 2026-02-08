const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({
  accessToken: process.env.MAP_TOKEN
});

module.exports.index = async (req, res) => {
  const { q, category } = req.query;
  let filter = {};

  if (q?.trim()) {
    const regex = new RegExp(q.trim(), "i");
    filter.$or = [
      { title: regex },
      { location: regex },
      { country: regex },
    ];
  }

  if (category) {
    filter.category = category;
  }

  const allListings = await Listing.find(filter).populate("owner");

  if ((q || category) && allListings.length === 0) {
    return res.render("listings/notFound.ejs", { query: q });
  }

  res.render("listings/index.ejs", { allListings, q });
};



module.exports.renderNewForm = (req,res)=>{
    res.render("listings/newListing.ejs");
};

module.exports.showListing = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id).populate({path :"reviews",populate:{path : "author"}}).populate("owner");
    if(!listing){
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
};

module.exports.createListing = async (req, res) => {
  const response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  if (!response.body.features.length) {
    req.flash("error", "Invalid location");
    return res.redirect("/listings/new");
  }

  const newListing = new Listing(req.body.listing);

  newListing.owner = req.user._id;
  newListing.image = {
    url: req.file.path,
    filename: req.file.filename,
  };

  newListing.geometry = response.body.features[0].geometry;

  await newListing.save();
  req.flash("success", "New Listing is Created");
  res.redirect("/listings");
};


module.exports.renderEditForm = async (req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exists");
        return req.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250/e_blur:200");
    req.flash("success", "Listing is Edited");
    res.render("listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async (req,res)=>{
    let {id}= req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing}); //deconstructing

    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image={url,filename};
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req,res)=>{
    let {id}=req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect ("/listings");
};

module.exports.searchListings = async (req, res) => {
  const { q } = req.query;

  const listings = await Listing.find({
    title: { $regex: q, $options: "i" }
  });

  // If nothing found → show notFound page
  if (listings.length === 0) {
    return res.render("listings/notFound", { query: q });
  }

  res.render("listings/index", { allListings: listings });
};
