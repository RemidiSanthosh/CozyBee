const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1765871321198-30fffc41e605?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: DEFAULT_IMAGE,
      set: (v) => (v === "" || v == null ? DEFAULT_IMAGE : v),
    },
  },

  price: {
    type: Number,
    required: true,
    min: 0,
  },
  location: String,
  country: String,
  reviews :[{
    type : Schema.Types.ObjectId,
    ref : "Review",
  }],
});

listingSchema.post("findOneAndDelete",async (listing)=>{
  if(listing){
    await Review.deleteMany({ _id : {$in : listing.reviews}});
  }
});

module.exports = mongoose.model("Listing", listingSchema);