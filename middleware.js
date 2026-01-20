const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const ExpressError=require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be login");
       return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
    res.locals.redirectUrl= req.session.redirectUrl;
    }
    next();
};

// is owner of that listing
module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found");
        return res.redirect("/listings");
    }

    if (!listing.owner.equals(req.user._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

//is author of that review
module.exports.isReviewAuthor = async (req,res,next) =>{
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);

    if(! review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the author of this Review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

// its joi validation from joi schema.js for newlisting
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};


//its joi validation from joi schema.js for reviews
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);

    if (error) {
        const errMsg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};
