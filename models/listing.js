const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  image: {
    url : String,
    filename : String,
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
  owner : {
    type : Schema.Types.ObjectId,
    ref : "User",
  },
  geometry : {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  category: {
    type: String,
    enum: [
      "trending",
      "rooms",
      "iconic",
      "mountains",
      "castles",
      "pools",
      "camping",
      "beach",
      "arctic",
      "domes",
      "cruise"
    ],
    required: true,
  },
});

listingSchema.post("findOneAndDelete",async (listing)=>{
  if(listing){
    await Review.deleteMany({ _id : {$in : listing.reviews}});
  }
});

listingSchema.index({
  title: "text",
  location: "text",
  country: "text"
});

module.exports = mongoose.model("Listing", listingSchema);