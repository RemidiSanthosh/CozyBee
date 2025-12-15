const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type : String,
        require : true,
    },
    description : String,
    image: {
    filename: { type: String, trim: true },
    url: { type: String, trim: true }
    },
    price : {
        type : Number,
    },
    location : {
        type : String,
    },
    country :{
        type :String,
    },
});



const Listing = mongoose.model("Listing", listingSchema);

module.exports= Listing;